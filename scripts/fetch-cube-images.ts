#!/usr/bin/env ts-node

import fs from 'fs'
import path from 'path'
import yaml from 'yaml'
import { format } from 'prettier'

import { cubeIDFromLink, fetchCube } from './utils/cube-cobra'

async function main() {
  const source = path.resolve(__dirname, '../src/data/cubes.yml')

  const cubes: {
    name: string
    owner: string
    category: string
    description: string
    link: string
  }[] = yaml.parse(fs.readFileSync(source).toString())

  const cubesWithImages: {
    name: string
    owner: string
    category: string
    description: string
    link: string
    imageURL?: string
  }[] = []

  for (const cube of cubes) {
    const id = cubeIDFromLink(cube.link)

    if (id != null) {
      const ccCube = await fetchCube(id)
      cubesWithImages.push({
        ...cube,
        imageURL: ccCube.image_uri
      })
    } else {
      cubesWithImages.push(cube)
    }
  }

  fs.writeFileSync(
    source,
    format(yaml.stringify(cubesWithImages), { filepath: source })
  )
}

main().then(() => {
  console.log('Complete')
})
