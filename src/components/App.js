// Importing Main Packages
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

// Importing Components
import Layout from './layout/Layout';
import TrackingForm from './pages/TrackingForm';
import ShipmentDetails from './pages/ShipmentDetails';

function App() {
    return (
        <>
            <Helmet>
                <html lang='ar' dir='rtl'/>
                <title>بوسطة | أسرع خدمة بريد سريع في مصر</title>
                <meta name="description"  content="هنوصلك منتجاتك اي مكان في مصر &quot; اسرع خدمة توصيل داخل المحافظات و كمان معانا تقدر تتابع شحنتك بنفسك و تتحكم فيها من مكانك" />
                <meta name="keywords"  content="شركات الشحن، + اسماء شركات شحن، شركات الشحن الداخلي، شركة شحن محافظات، ارخص شركة شحن للمحافظات، شركات الشحن فى مصر، شركات الشحن السريع، شركات شحن للصعيد" />
            </Helmet>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<TrackingForm/>}/>
                    <Route path="*" element={<h1>خطأ - هذه الصفحة غير موجودة</h1>}/>
                    <Route path="home" element={<h1>الصفحة الرئيسية</h1>}/>
                    <Route path="pricing" element={<h1>الأسعار</h1>}/>
                    <Route path="contact-sales" element={<h1>كلم المبيعات</h1>}/>
                    <Route path="login" element={<h1>تسجيل الدخول</h1>} />
                    <Route path="shipment-details/:id" element={<ShipmentDetails/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;