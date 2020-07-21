import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeJourney } from '@openbanking/ui-data/lib/services/auth-service'
import { setAccessToken } from '@openbanking/ui-data/lib/actions/auth'
import { setAccountId } from '@openbanking/ui-data/src/actions/account'
import PieChart from './PieChartCustom'

const Dashboard = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        //remove access_token to start journey again
        localStorage.removeItem('token')
        localStorage.removeItem('refresh_token')
        dispatch(setAccessToken(null,null))
        dispatch(setAccountId(null))
    },[])

    function setType(type) {
        // initialize aisp/pisp journey to get authorization URL
        initializeJourney(dispatch, type)
    }

    const dataPieChart = { GBP: 1000, INR: 2000 }

    return (
        <div className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="text">
                            <h3>Revolutionizing Customer Experience</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="journeyBtns">
                            <button
                                className="journeyBtn"
                                onClick={() => setType('aisp')}
                            >
                                Click to start the next level journey
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
