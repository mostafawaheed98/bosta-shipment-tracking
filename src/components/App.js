// Importing Main Packages
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

// Importing Components
import Layout from './layout/Layout';
import TrackingForm from './pages/TrackingForm';

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
                    <Route path="login" element={<h1>تسجيل الدخول</h1>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;