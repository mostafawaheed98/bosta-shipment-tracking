import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';


function TrackingForm() {

    const TRACK_API_URL = 'https://tracking.bosta.co/shipments/track/';
    const navigate = useNavigate();
    const {register, handleSubmit, setError, formState: {errors, isSubmitting}} = useForm();
    const onSubmit = async (data)=>{
        await axios.get(TRACK_API_URL + data.trackingCode)
        .then((result)=>{
            navigate("shipment-details/" + data.trackingCode, {state: result.data})
        })
        .catch(()=>{
            setError("trackingCode", {message: "لا يوجد لدينا شحنة بهذا الرقم"})
        })
    }

    return (
        <>
            <div className='row'>
                <div className='col-sm-6 mx-auto'>
                    <div className="card text-dark bg-light mb-3 mt-5">
                        <div className="card-body">
                            <h5 className="card-title">تتبع شحنتك</h5>
                            <hr className='hr-w-10' />
                            <p className="card-text">برجاء إدخال رقم شحنتك لتتتبع الحالة الخاصة بها!</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            {errors.trackingCode && <div className="alert alert-danger" role="alert">{errors.trackingCode.message}</div>}
                            <div className="input-group mb-3">
                                <input {...register("trackingCode",{
                                    required : 'يجب إدخال رقم الشحنة',
                                    min: {
                                        value: 0,
                                        message: 'هذا الرقم غير صالح'
                                    },
                                    minLength: {
                                        value: 7,
                                        message: 'لا يمكن أن يكون الرقم أقل من 7 ارقام'
                                    }
                                })} type="number" className="form-control" placeholder="مثال: 6636234" aria-describedby="button-addon2"/>
                                <button className="btn text-light" type="submit" id="button-addon2">
                                    تتبع الشحنة <FontAwesomeIcon icon={isSubmitting? faSpinner : faSearch} pulse={isSubmitting}/>
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrackingForm;