import Question from '../components/question'

const data = [
  {
    question:"How many team members can I invite?",
    ans:"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question:"What is the maximum file upload size?",
    ans:"No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question:"How do I reset my password?",
    ans:"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question:"Can I cancel my subscription?",
    ans:"Yes! Send us a message and we’ll process your request no questions asked. ",
  },
  {
    question:"Do you provide addtional support?",
    ans:"Chat and email support is available 24/7. Phone lines are open during normal business hours. ",
  },
]

export default function Home() {
  return (
    <div>
      <div className='hidden sm:flex h-[100vh] bg-gradient-to-b from-[#af67e9] to-[#6565e7] justify-center items-center'>
          <div className='bg-white bg-cover rounded-2xl w-3/5 h-3/4 shadow-lg flex'>
            <div className='w-1/2 relative overflow-hidden'>
              <img src='/images/bg-pattern-desktop.svg' className='absolute left-[-50px] top-[10%]'></img>
              <img src='/images/illustration-woman-online-desktop.svg' className='absolute top-[15%] left-[-50px]'></img>
              <img src='/images/illustration-box-desktop.svg' className='absolute top-40 left-[-80px]'></img>
            </div>
            <div className='w-1/2 pt-2 pb-8 mt-12 flex flex-col overflow-auto'>
              <div className='text-3xl font-bold'>FAQ</div>
              <div className='mt-8'>
                {data.map((i)=>{
                  return(
                    <Question 
                      question={i.question}
                      ans={i.ans}
                    />
                  )
                })}
              </div>
            </div>
          </div>
      </div>
      <div className='h-[100vh] flex sm:hidden bg-gradient-to-b from-[#af67e9] to-[#6565e7] justify-center items-center overflow-auto'>
        <div className='bg-white w-4/5 rounded-2xl mt-20 pb-8'>
          <div className='relative bg-black'>
            <img src='/images/illustration-woman-online-mobile.svg' className='absolute top-[-80px] left-[20%] h-40'></img>  
            <img src='/images/bg-pattern-desktop.svg' className='absolute top-[-100px] left-[20%] h-52'></img>  
          </div>
          <div className='mt-32 px-2'>
            <div className='text-center text-3xl font-bold'>FAQ</div>
            <div className='mt-8 overflow-auto'>
                {data.map((i)=>{
                  return(
                    <Question 
                      question={i.question}
                      ans={i.ans}
                    />
                  )
                })}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
