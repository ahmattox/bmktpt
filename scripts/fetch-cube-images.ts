import fs from 'fs'
import path from 'path'
import yaml from 'yaml'
import prettier from 'prettier'

import { cubeIDFromLink, fetchCube } from './utils/cube-cobra'

async function main() {
  const cubesPath = path.resolve(__dirname, '../src/data/cubes.yml')

  const cubes: {
    link: string
  }[] = yaml.parse(fs.readFileSync(cubesPath).toString())

  const cubesWithImages: {
    link: string
    imageURL?: string
  }[] = []

  for (const cube of cubes) {
    const id = cubeIDFromLink(cube.link)

    if (id != null) {
      const ccCube = await fetchCube(id)

      cubesWithImages.push({
        ...cube,
        imageURL: ccCube.image?.uri
      })
    } else {
      cubesWithImages.push(cube)
    }
  }

  const prettierOptions = await prettier.resolveConfig(cubesPath)

  fs.writeFileSync(
    cubesPath,
    prettier.format(yaml.stringify(cubesWithImages).replace(/\n-/g, '\n\n-'), {
      ...prettierOptions,
      filepath: cubesPath
    })
  )
}

main().then(() => {
  console.log('Complete')
})
