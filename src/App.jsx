
import { useEffect, useRef, useState } from 'react'
import './App.css'
import image1 from './assets/laptop1.jpg'
import image2 from './assets/laptop2.jpg'
import {SceneCanvas} from 'ultron-ai-sdk';        
        
let prevCart = 0

const avatarId = null // Put the avatarId of the character you want to use
const apiKey = null // Put your API key here
// visit https://www.npmjs.com/package/ultron-ai-sdk to see instructions on how to get your avatarId and apiKey

function App() {
  const [cart, setCart] = useState(0);
  const sceneCanvas = useRef(null)
  const character = useRef(null)

  const init = async() => {
    if(!avatarId || !apiKey) return alert("Please provide your avatarId and apiKey")
    sceneCanvas.current = new SceneCanvas('target-html-element')
    const initializationSetting= {
      avatarId: avatarId,
      config:{
        apiKey: apiKey
      },
      options:{
          hideClickMessage: true, //remove default "Click message" on the avatar
          alwaysListen: false    // For Push to talk conversation (⚠️ experimental)
      }
  }
    await sceneCanvas.current.init(initializationSetting)
    character.current = sceneCanvas.current.character
    // character.say() or .chat() should always be called after user any interaction

    // character.current.say("Your custom message.")

    // character.current.chat("Can you help me choose the right laptop?")
                
}

  useEffect(() => {
    if(cart !== prevCart) {
      if(character.current){
        character.current.say(`You have ${cart} items in your cart.`)
      }
    }
    prevCart = cart
  }, [cart])

  useEffect(() => {
    if(!sceneCanvas.current) 
    init()
  }, [])

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-900">
      <header className="w-full bg-blue-600 text-white text-center py-6 text-3xl font-bold shadow-md">
        Welcome to Laptop Store
      </header>

      <main className="w-full max-w-4xl p-6">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Find the Best Laptops</h2>
          <p className="text-lg text-gray-700">
            Browse our collection of high-performance laptops at unbeatable prices.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <img
              src={image2} // Replace with actual image URL
              alt="Gaming Laptop"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-bold">Gaming Laptop</h3>
            <p className="text-gray-600">Powerful performance for gamers and creators.</p>
            <button
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700"
              onClick={() => setCart(cart + 1)}
            >
              Add to Cart
            </button>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <img
              src={image1} // Replace with actual image URL
              alt="Business Laptop"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-bold">Business Laptop</h3>
            <p className="text-gray-600">Sleek and powerful for professionals on the go.</p>
            <button
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700"
              onClick={() => setCart(cart + 1)}
            >
              Add to Cart
            </button>
          </div>
        </section>
      </main>

      <aside className="w-full bg-gray-200 p-4 text-center">
        <h2 className="text-xl font-bold">Cart: {cart} items</h2>
      </aside>
      {/* Below is the code for Ultron Avatar block */}
      <div id="target-html-element">

      </div>

      <footer className="mt-auto w-full p-4 bg-gray-800 text-white text-center">
        &copy; 2025 Laptop Store. All rights reserved.
      </footer>
    </div>
    </>
  )
}

export default App
