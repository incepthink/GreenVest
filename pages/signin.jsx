import Navbar from '@/components/Navbar/Navbar'
import { env } from '@/next.config'
import { StoreContext } from '@/utils/Store'
import { Google } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'

const Singin = () => {
  const { state, dispatch } = useContext(StoreContext);
  const router = useRouter();
  const path = router.asPath;
  console.log(path);

  const googleLoginHandler = async () => {
    // setshowModal(false);
    const idToken = await state.magic.oauth.loginWithRedirect({
        provider: 'google',
        redirectURI: `${env.NEXT_PUBLIC_URL}/redirect?link=/`,
    });
    console.log(idToken);
  }
  
  return (
    <>
      <Navbar />
      <div className='max-w-screen max-h-screen flex overflow-hidden justify-center items-center my-12 md:my-0'>
          <div className='md:w-[50%] max-w-screen flex justify-center items-center'>
            <div className='flex flex-col'>
              <h1 className='font-bebas text-4xl uppercase'>Welcome There!</h1>
              <p className='text-[#667085] mb-4'>Select one of the ways to sign in.</p>
              <form className='flex flex-col w-full items-center'>
                {/* <div className='flex flex-col w-full my-2'>
                  <label>Name</label>
                  <input 
                    type='text' 
                    placeholder='Enter Your Name' 
                    className='bg-white border border-gray-300 rounded-md py-2 px-4 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white-600 focus:border-white' 
                  />
                </div>
                <div className='flex flex-col w-full my-2'>
                  <label>Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter Your Password" 
                    className="bg-white border border-gray-300 rounded-md py-2 px-4 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white-600 focus:border-white" 
                  />
                </div>
                <div className='flex flex-row w-full justify-between my-2'>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className='h-full'
                    />
                    <span className="ml-1 text-gray-700">Remember me</span>
                  </div>
                  <Link href='/forgot-password' className='text-[#68CAF1] underline underline-offset-4'>Forgot Password</Link>
                </div> */}

                {/* <button className="w-full bg-[#68CAF1] py-3 text-white rounded-md my-6">Sign In</button> */}
                <button onClick={googleLoginHandler} className='w-full flex items-center justify-center bg-transparent hover:bg-[#d3e4ff] border-2 border-slate-400 py-6 px-4 rounded-lg mt-2'>
                    <Image 
                      src='/images/googleLogo.png' 
                      alt='google logo' 
                      width={20} 
                      height={20} 
                    />
                    <span className='mx-2'>Sign in with Google</span>
                    
                </button>
                <button onClick={googleLoginHandler} className='w-full flex items-center justify-center bg-transparent hover:bg-[#d3e4ff] border-2 border-slate-400 py-2 px-4 rounded-lg mt-2'>
                    <Image 
                      src='/images/metamaskLogo.png' 
                      alt='metamask logo' 
                      width={20} 
                      height={20} 
                    />
                    <span className='mx-2'>Connect Metamask</span>
                    
                </button>
                <button onClick={googleLoginHandler} className='w-full flex items-center justify-center bg-transparent hover:bg-[#d3e4ff] border-2 border-slate-400 py-2 px-4 rounded-lg mt-2'>
                    <Image 
                      src='/images/walletConnectLogo.png' 
                      alt='google logo' 
                      width={20} 
                      height={20} 
                    />
                    <span className='mx-2'>Wallet Connect</span>
                    
                </button>
                {/* <div className='w-full flex flex-row justify-between mt-2'>
                  
                  <button className='bg-transparent border-2  border-slate-400 py-1 px-4 rounded-lg'>
                    <Image 
                      src='/images/metamaskLogo.png' 
                      alt='google logo' 
                      width={20} 
                      height={20} 
                    />
                  </button>
                  <button className='bg-transparent border-2  border-slate-400 py-1 px-4 rounded-lg'>
                    <Image 
                      src='/images/walletConnectLogo.png' 
                      alt='google logo' 
                      width={20} 
                      height={20} 
                    />
                  </button>
                  <button className='bg-transparent border-2  border-slate-400 py-1 px-4 rounded-lg'>
                    <Image 
                      src='/images/metaLogo.png' 
                      alt='google logo' 
                      width={20} 
                      height={20} 
                    />
                  </button>
                </div> */}
                {/* <div className='w-full text-center my-4'>
                  Don&apos;t have an account? <span className='text-[#68CAF1]' onClick={()=>router.push('/signup')}>Sign Up</span>
                </div> */}
              </form>

            </div>
          </div>
          <div className='w-[50%] hidden md:flex p-3'>
            <Image src="/images/signin.png" alt="signin earth image" width={1960} height={1080} /> 
          </div>
      </div>
    </>
  )
}

export default Singin