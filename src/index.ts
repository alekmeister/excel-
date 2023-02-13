import './scss/index.scss'


async function test(arg: string) {
  return await Promise.resolve('async working')
}

test('qwe').then((el) => console.log(el))

console.log('init')
