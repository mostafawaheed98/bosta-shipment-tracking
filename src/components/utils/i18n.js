import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  // detect user language

  .use(initReactI18next)
  .init({
    fallbackLng: 'ar',
    resources: {
      ar: {
        translation: {
          shipmentStatus: {
            'TICKET_CREATED': 'تم إنشاء الشحنة',
            'PACKAGE_RECEIVED': 'تم إستلام الشحنة من التاجر',
            'OUT_FOR_DELIVERY': 'الشحنة خرجت للتسليم',
            'NOT_YET_SHIPPED': 'الشحنة لم تخرج للتسليم بعد',
            'RECEIVED_DELIVERY_LOCATION': 'تم معرفة عنوان التسليم',
            'IN_TRANSIT': 'الشحنة في مرحلة انتقالية',
            'DELIVERED_TO_SENDER': 'تم إرجاع الشحنة للتاجر',
            'WAITING_FOR_CUSTOMER_ACTION': 'في انتظار طلب العميل',
            'DELIVERED': 'تم تسليم الشحنة'
          },
          hubs:{
            'Bosta HQ': 'مقر بوسطة الرئيسي',
            'Mohandseen Hub': 'فرع المهندسين',
            'Tanta Hub': 'فرع طنطا',
            'Cairo Sorting Facility': 'مقر تخزين القاهرة',
            'Katamya Hub': 'فرع القطامية',
            'Alexandria Hub': 'فرع الإسكندرية',
          }
        }
      }
    }
  });

export default i18n;
