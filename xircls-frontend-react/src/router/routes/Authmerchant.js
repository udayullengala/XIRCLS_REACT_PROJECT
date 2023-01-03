import { lazy } from 'react'
// import Invoices from '../../views/invoices/invoices'
const Merchantoutlet = lazy(() => import('../../views/AuthMerchant/Js/Merchantoutlet'))
const CmStrat = lazy(() => import('../../views/AuthMerchant/Js/CmStrat'))
const Pricing = lazy(() => import('../../views/AuthMerchant/Js/Plan_pricing'))
const Cart = lazy(() => import('../../views/AuthMerchant/Js/Cart'))
const ProgressPage = lazy(() => import('../../views/AuthMerchant/Js/ProgressPage'))
const InfinitiProgress = lazy(() => import('../../views/AuthMerchant/Js/InfinitiProgress'))
const Company = lazy(() => import('../../views/AuthMerchant/Js/Company'))
const IssueOffers = lazy(() => import('../../views/AuthMerchant/Js/IssueOffers'))
const IssueOffers2 = lazy(() => import('../../views/AuthMerchant/Js/IssueOffers2'))
const CreateNetwork = lazy(() => import('../../views/AuthMerchant/Js/CreateNetwork'))
const OfferValue = lazy(() => import('../../views/AuthMerchant/Js/OfferCampaign/OfferValue'))
const OfferAcquisition = lazy(() => import('../../views/AuthMerchant/Js/OfferCampaign/OfferAcquisition'))
const OfferRetention = lazy(() => import('../../views/AuthMerchant/Js/OfferCampaign/OfferRetention'))
const OfferAction = lazy(() => import('../../views/AuthMerchant/Js/OfferCampaign/OfferAction'))
const OfferEmail = lazy(() => import('../../views/AuthMerchant/Js/OfferCampaign/OfferEmail'))
const PurchaseSub = lazy(() => import('../../views/AuthMerchant/Js/Purchases/PurchaseSub'))
const PurchaseTransaction = lazy(() => import('../../views/AuthMerchant/Js/Purchases/PurchaseTransaction'))
const PurchaseInvoice = lazy(() => import('../../views/AuthMerchant/Js/Purchases/PurchaseInvoice'))
const PurchaseWallet = lazy(() => import('../../views/AuthMerchant/Js/Purchases/PurchaseWallet'))
const OnlineOutletBasic = lazy(() => import('../../views/AuthMerchant/Js/OnlineOutlet/OnlineOutletBasic'))
const OnlineOutletProfile = lazy(() => import('../../views/AuthMerchant/Js/OnlineOutlet/OnlineOutletProfile'))
const OnlineOutletLocation = lazy(() => import('../../views/AuthMerchant/Js/OnlineOutlet/OnlineOutletLocation'))
const OnlineOutletSocial = lazy(() => import('../../views/AuthMerchant/Js/OnlineOutlet/OnlineOutletSocial'))
const CustomerProfileDetails = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileDetails'))
const CustomerProfileBasic = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileBasic'))
const CustomerBasicPersonal = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileBasic/CustomerBasicPersonal'))
const CustomerBasicIdProof = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileBasic/CustomerBasicIdProof'))
const CustomerBasicAddress = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileBasic/CustomerBasicAddress'))
const CustomerBasicCompanyInfo = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileBasic/CustomerBasicCompanyInfo'))
const CustomerBasicAccount = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileBasic/CustomerBasicAccount'))
const CustomerProfileVehicle = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileVehicle'))
const CustomerProfileProducts = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileProducts'))
const CustomerProfileOffer = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileOffer'))
const CustomerProfileBooking = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileBooking'))
const CustomerProfileInvoice = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileInvoice'))
const CustomerProfileCall = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileCall'))
const CustomerProfileLoyalty = lazy(() => import('../../views/AuthMerchant/Js/CustomerProfile/CustomerProfileLoyalty'))
const Outlet = lazy(() => import('../../views/AuthMerchant/Js/Outlet'))


const Auth_merchant_Routes = [
  {
    path: '/merchant/merchant_outlet',
    element: <Merchantoutlet />,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/merchant/cross_marketing',
    element: <CmStrat />
  },
  {
    path: '/merchant/pricing',
    element: <Pricing />
  },
  {
    path: '/merchant/cart',
    element: <Cart />
  },
  {
    path: '/merchant/progress_1',
    element: <ProgressPage />
  },
  {
    path: '/merchant/progress_2',
    element: <InfinitiProgress />
  },
  {
    path: '/merchant/company_details',
    element: <Company />
  },
  {
    path: '/merchant/issue_offers',
    element: <IssueOffers />
  },
  {
    path: '/merchant/issue_offers2',
    element: <IssueOffers2 />
  },
  {
    path: '/merchant/create_network',
    element: <CreateNetwork />
  },
  {
    path: '/merchant/offer_value',
    element: <OfferValue />
  },
  {
    path: '/merchant/offer_acquisition',
    element: <OfferAcquisition />
  },
  {
    path: '/merchant/offer_retention',
    element: <OfferRetention />
  },
  {
    path: '/merchant/offer_action',
    element: <OfferAction />
  },
  {
    path: '/merchant/offer_email',
    element: <OfferEmail />
  },
  {
    path: '/merchant/purchase_sub',
    element: <PurchaseSub />
  },
  {
    path: '/merchant/purchase_transaction',
    element: <PurchaseTransaction />
  },
  {
    path: '/merchant/purchase_invoice',
    element: <PurchaseInvoice />
  },
  {
    path: '/merchant/purchase_wallet',
    element: <PurchaseWallet />
  },
  {
    path: '/merchant/online_outlet_basic',
    element: <OnlineOutletBasic />
  },
  {
    path: '/merchant/online_outlet_profile',
    element: <OnlineOutletProfile />
  },
  {
    path: '/merchant/online_outlet_location',
    element: <OnlineOutletLocation />
  },
  {
    path: '/merchant/online_outlet_social',
    element: <OnlineOutletSocial />
  },
  //if urls are to be changed, please update <CustomerProfileNav /> and <CustomerBasicNav> accordingly as well
  {
    path: '/merchant/customer_details',
    element: <CustomerProfileDetails />
  },
  {
    path: '/merchant/customer_basic/',
    element: <CustomerProfileBasic />
  },
  {
    path: '/merchant/customer_basic/basic_personal',
    element: <CustomerBasicPersonal />
  },
  {
    path: '/merchant/customer_basic/basic_idproof',
    element: <CustomerBasicIdProof />
  },
  {
    path: '/merchant/customer_basic/basic_address',
    element: <CustomerBasicAddress />
  },
  {
    path: '/merchant/customer_basic/basic_companyinfo',
    element: <CustomerBasicCompanyInfo />
  },
  {
    path: '/merchant/customer_basic/basic_account',
    element: <CustomerBasicAccount />
  },
  {
    path: '/merchant/customer_vehicle',
    element: <CustomerProfileVehicle />
  },
  {
    path: '/merchant/customer_products',
    element: <CustomerProfileProducts />
  },
  {
    path: '/merchant/customer_offer',
    element: <CustomerProfileOffer />
  },
  {
    path: '/merchant/customer_booking',
    element: <CustomerProfileBooking />
  },
  {
    path: '/merchant/customer_invoice',
    element: <CustomerProfileInvoice />
  },
  {
    path: '/merchant/customer_call',
    element: <CustomerProfileCall />
  },
  {
    path: '/merchant/customer_loyalty',
    element: <CustomerProfileLoyalty />
  },
  {
    path: '/merchant/outlet',
    element: <Outlet />
//   },
//   {
//     path: '/merchant/invoices',
//     element: <Invoices />
  }
]

export default Auth_merchant_Routes