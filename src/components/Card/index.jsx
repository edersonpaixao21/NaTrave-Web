import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLocalStorage } from 'react-use'

const validationSchema = yup.object().shape({
    homeTeamScore: yup.string().required(),
    awayTeamScore: yup.string().required()
})

export const Card = ({ disabled, gameId, homeTeam, awayTeam, gameTime,homeTeamScore, awayTeamScore }) => {
    const [auth] = useLocalStorage('auth')

    const formik = useFormik({
        onSubmit: (values) => {
            axios({
                method: 'post',
                baseURL: import.meta.env.VITE_API_URL,
                url: '/hunches',
                headers: {
                    authorization: `Bearer ${auth.accessToken}`
                },
                data: {
                    ...values,
                    gameId
                }
            })
        },
        initialValues: {
            homeTeamScore,
            awayTeamScore
        },
        validationSchema
    })
    return(
        <div className='rounded-xl border border-gray-500 p-4 text-center space-y-4'>
            <span className='text-base md:text-base text-gray-700 font-bold'>{gameTime}</span>

            <form className='flex space-x-4 justify-center items-center'>
                <div className='flex space-x-4 justify-center items-center'>
                    <span className='uppercase text-gray-500 text-lg'>{homeTeam}</span>
                    <img src={`/imgs/flags/${homeTeam}.png`}/>
                    
                </div>

                <input
                type="number" 
                name="homeTeamScore"
                className='bg-red-300/[0.15] w-14 h-14 text-red-700 text-xl text-center'
                value={formik.values.homeTeamScore}
                onChange={formik.handleChange}
                onBlur={formik.handleSubmit}
                disabled={disabled}
                />

                <span className='text-red-500 font-bold'>X</span>

                <input 
                type="number" 
                name="awayTeamScore"
                className='bg-red-300/[0.15] w-14 h-14 text-red-700 text-xl text-center'
                value={formik.values.awayTeamScore}
                onChange={formik.handleChange}
                onBlur={formik.handleSubmit}
                disabled={disabled}
                />
                
                <div className='flex space-x-4 justify-center items-center'>
                    <img src={`/imgs/flags/${awayTeam}.png`}/>
                    <span className="uppercase text-gray-500 text-lg">{awayTeam}</span>
                </div>
            </form>
        </div>
    )
}