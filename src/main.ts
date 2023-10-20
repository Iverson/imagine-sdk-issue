import { client } from 'imaginesdk'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Test app
`

console.log('client', client)
