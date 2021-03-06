import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import Moment from 'react-moment';
import 'moment/locale/ar-sa';
import { useTranslation } from 'react-i18next';
import supportImg from '../../assets/images/support.svg'

function ShipmentDetails() {
    const {state} = useLocation();
    const { t } = useTranslation();

    const setCurrentStateColor = ()=>{
        switch (state.CurrentStatus.state) {
            case 'DELIVERED':
                return {color: '#39bf23'}       
            case 'DELIVERED_TO_SENDER':
                return {color: '#ff0000'}
            default:
                return {color: '#f89828'}
        }
    }

    useEffect(()=>{
        const setSteps = ()=>{
            const events = state.TransitEvents;
            const getStateIndex = (shipmentState)=> events.findIndex(event => event.state === shipmentState);
            document.querySelectorAll('ol.steps>li').forEach((node)=>{
                if (getStateIndex(node.dataset.state) !== -1 && getStateIndex(node.dataset.state) === events.length-1) {
                    node.classList.add('is-active');
                }
                else if (getStateIndex(node.dataset.state) !== -1 && getStateIndex(node.dataset.state) !== events.length-1) {
                    node.classList.add('is-active', 'is-complete')
                }
                if (getStateIndex('DELIVERED_TO_SENDER') !== -1 && getStateIndex('DELIVERED_TO_SENDER') === events.length-1) {
                    document.getElementById("DELIVERED_STEP").classList.remove('is-active', 'is-complete');
                    document.getElementById("OUT_FOR_DELIVERY_STEP").classList.remove('is-complete');
                    document.getElementById("OUT_FOR_DELIVERY_STEP").classList.add('is-stopted');
                    document.getElementById("OUT_FOR_DELIVERY_STEP").innerHTML = `${t(`shipmentStatus.${state.CurrentStatus.state}`)}`;
                    return
                }
            });
        }

        setSteps();
    },[state.TransitEvents]);

    return (
        <>
            <div className='mt-5 border rounded-2'>
                <div className='p-4 border-bottom'>
                    <div className='row'>
                        <div className='col-sm-3 col-xs-12'>
                            <div className='shipment-info-box'>
                                <h6>?????? ????????????: {state.TrackingNumber}</h6>
                                <h5 style={setCurrentStateColor()}>{t(`shipmentStatus.${state.CurrentStatus.state}`)}</h5>
                            </div>
                        </div>
                        <div className='col-sm-3 col-xs-12'>
                            <div className='shipment-info-box'>
                                <h6>?????? ??????????</h6>
                                <h5><Moment locale='ar-sa' format='dddd - Do MMMM YYYY - h:mm a'>{state.CurrentStatus.timestamp}</Moment></h5>
                            </div>
                        </div>
                        <div className='col-sm-3 col-xs-12'>
                            <div className='shipment-info-box'>
                                <h6>?????? ????????????</h6>
                                <h5>SOUQ.COM</h5>
                            </div>
                        </div>
                        <div className='col-sm-3 col-xs-12'>
                            <div className='shipment-info-box'>
                                <h6>???????? ?????????????? ????????</h6>
                                <h5><Moment locale='ar-sa' format='dddd - Do MMMM YYYY - h:mm a'>{state.PromisedDate}</Moment></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shipment-steps-bar'>
                    <ol className="steps">
                        <li className="step" id='TICKET_CREATED_STEP' data-state='TICKET_CREATED' data-step="1">
                            {t('shipmentStatus.TICKET_CREATED')}
                        </li>
                        <li className="step" id="PACKAGE_RECEIVED_STEP" data-state='PACKAGE_RECEIVED' data-step="2">
                            {t('shipmentStatus.PACKAGE_RECEIVED')}
                        </li>
                        <li className="step" id="OUT_FOR_DELIVERY_STEP" data-state='OUT_FOR_DELIVERY' data-step="3">
                            {t('shipmentStatus.OUT_FOR_DELIVERY')}<br/>
                        </li>
                        <li className="step" id="DELIVERED_STEP" data-state='DELIVERED' data-step="4">
                            {t('shipmentStatus.DELIVERED')}
                        </li>
                    </ol>
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-sm-8'>
                    <h6 className='mt-4 mb-3'>???????????? ????????????</h6>
                    <p>{state.address}</p>
                    <table className="table border rounded-3 table-borderless">
                        <thead className="table-light ">
                            <tr>
                            <th scope="col">??????????</th>
                            <th scope="col">??????????????</th>
                            <th scope="col">??????????</th>
                            <th scope="col">????????????</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.TransitEvents.map((event, index)=>(
                                
                                <tr className='border-bottom' key={index}>
                                <th scope="row">{event.hub? t(`hubs.${event.hub}`) : '-'}</th>
                                <td><Moment locale='ar-sa' format='Do MMMM YYYY'>{event.timestamp}</Moment></td>
                                <td><Moment locale='ar-sa' format='h:mm a'>{event.timestamp}</Moment></td>
                                <td>{t(`shipmentStatus.${event.state}`)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='col-sm-4'>
                    <h6 className='mt-4 mb-3'>?????????? ??????????????</h6>
                    <div className="card bg-light">
                        <div className="card-body p-4">
                            ?????????????? ???????? ???????? ???????? ?????????? ?????????????? ?????????? ?????????????? ???????? 17 ???????? 22?? ?????????? ??????????????
                        </div>
                    </div>
                    <div className="d-flex align-items-center border mt-3 rounded-2 p-3">
                        <div className="flex-shrink-0">
                            <img src={supportImg} alt="..." width="150" height="150"/>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <p><b>???? ???????? ?????????? ???? ????????????!</b></p>
                            <div className="d-grid gap-2">
                                <a href={'tel:' + state.SupportPhoneNumbers} type="button" className="btn btn-sm call-support-btn">?????????? ???? ??????????????</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShipmentDetails;