import { useState } from 'react'
import './style.scss'
import {motion} from 'framer-motion'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
      <motion.div 
        layout 
        className="card" 
        onClick={() => setIsOpen(!isOpen)}
        style={{borderRadius: '1rem'}}
        transition={{duration: .5}}
      >
        <motion.div 
          className="card-top" 
          layout="position"
        >
          <div className="card-top__header">       
            <h3>React + Framer motion 🚀</h3>
          </div>
        </motion.div>
        
        {isOpen && (
          <motion.div 
            className="card-content"
            initial={{clipPath: 'circle(0% at 0 0)'}}
            animate={{clipPath: 'circle(140.9% at 0 0)'}}
            transition={{duration: .5,delay: .25,type:'spring', damping:25,stiffness: 100}}
          >
            <p>
            <span>Welcome to Adventure Planner, your gateway to thrilling travel experiences! Our Travel Explorer feature allows you to embark on a virtual journey to explore exotic destinations worldwide. From pristine beaches to majestic mountains, discover the beauty and diversity of our planet right from your screen.</span>
               <p>
                <p>
Key Features:
- Personalized Recommendations: Receive tailored travel suggestions based on your interests and preferences.
- Detailed Itineraries: Plan your trip with ease using our detailed itineraries, complete with must-visit attractions and recommended activities.
- Real-time Weather Updates: Stay informed about the current weather conditions at your chosen destination to ensure a seamless and enjoyable travel experience.
</p>
</p>


            </p>
            <p>
             
            </p>
          </motion.div>
        )}
      </motion.div>
  )
}

export default App