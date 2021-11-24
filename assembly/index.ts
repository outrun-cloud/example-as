// The entry file of your WebAssembly module.
import 'wasi' // Automatically import WASI bindings
import { Console, FileSystem, Descriptor } from 'as-wasi'


Console.log('Hello World!') // console.log('Hello World!') also works
