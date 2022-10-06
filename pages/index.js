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
            <div className='w-1/2'>
              <img src='/images/bg-pattern-desktop.svg' className='absolute left-48 top-28 h-2/3'></img>
              <img src='/images/illustration-woman-online-desktop.svg' className='absolute top-36 left-48 h-1/2'></img>
              <img src='/images/illustration-box-desktop.svg' className='absolute top-64 left-48 h-32'></img>
            </div>
            <div className='w-1/2 py-2 mt-8 flex flex-col'>
              <div className='text-3xl font-bold'>FAQ</div>
              <div className='mt-4'>
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
      <div className='h-[100vh] flex sm:hidden bg-gradient-to-b from-[#af67e9] to-[#6565e7] justify-center items-center overflow-clip'>
        <img src='/images/illustration-woman-online-mobile.svg' className='absolute top-20 h-40'></img>  
        <img src='/images/bg-pattern-desktop.svg' className='absolute top-16 h-52'></img>  
        <div className='h-2/3 bg-white w-4/5 rounded-2xl mt-12'>
          <div className='mt-32 px-2'>
            <div className='text-center text-3xl font-bold'>FAQ</div>
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
    </div>
  )
}
