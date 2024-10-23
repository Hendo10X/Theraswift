import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Package, Truck, Users, Settings, MessageCircle, Menu, ChevronLeft, ChevronRight, X, Pill, LogOut, Trash2, CreditCard, UserCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import MedsPage from './MedsPage';
import OrderPage from './OrderPage';
import SettingsPage from './SettingsPage';
import DeliveryPage from './DeliveryPage';
import InvitePage from './InvitePage';
import EssentialsPage from './EssentialsPage';
import ChatInterface from './ChatInterface';



const Dashboard = () => {
    const [activePage, setActivePage] = useState('meds');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [selectedMedications, setSelectedMedications] = useState([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isBagModalOpen, setIsBagModalOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [bagItems, setBagItems] = useState([
        { id: 1, name: 'Paracetamol', price: 5.99, image: 'https://placehold.co/100x100?text=Paracetamol' },
        { id: 2, name: 'Ibuprofen', price: 7.99, image: 'https://placehold.co/100x100?text=Ibuprofen' },
    ]); // Mock bag items
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
    const location = useLocation();
    const navigate = useNavigate();
    

    useEffect(() => {
        if (location.state?.selectedMedications) {
            setSelectedMedications(location.state.selectedMedications);
        }
    }, [location.state]);

    const renderMainContent = () => {
        switch (activePage) {
            case 'meds':
                return <MedsPage selectedMedications={selectedMedications} />;
            case 'orders':
                return <OrderPage />;
            case 'delivery':
                return <DeliveryPage />;
            case 'invite':
                return <InvitePage />;
            case 'settings':
                return <SettingsPage />;
            case 'essentials':
                return <EssentialsPage />;
            default:
                return <MedsPage selectedMedications={selectedMedications} />;
        }
    };

    const NavButton = ({ page, icon: Icon, label, description }) => (
        <button
            onClick={() => {
                setActivePage(page);
                setIsMobileSidebarOpen(false);
            }}
            className={`w-full px-4 py-3 mb-2 flex items-center ${activePage === page ? 'text-green-700 bg-green-100' : 'text-gray-700'} ${!isSidebarOpen && 'justify-center'}`}
        >
            <Icon className={isSidebarOpen ? "mr-3" : ""} size={20} />
            {isSidebarOpen && (
                <div className="text-left">
                    <p className="font-medium">{label}</p>
                    <p className="text-xs text-gray-500">{description}</p>
                </div>
            )}
        </button>
    );

    const removeFromBag = (itemId) => {
        setBagItems(bagItems.filter(item => item.id !== itemId));
    };

    const BagModal = () => (
        <div className="absolute top-16 right-4 w-80 bg-white rounded-md shadow-lg p-4 text-gray-800 z-50">
            <h3 className="font-bold mb-4">Your Bag</h3>
            {bagItems.length === 0 ? (
                <p>Your bag is empty</p>
            ) : (
                <>
                    {bagItems.map((item) => (
                        <div key={item.id} className="flex items-center mb-4 pb-4 border-b">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                            <div className="flex-grow">
                                <h4 className="font-semibold">{item.name}</h4>
                                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                            </div>
                            <button onClick={() => removeFromBag(item.id)} className="text-red-500 hover:text-red-700">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}
                    <div className="flex justify-between items-center mt-4">
                        <p className="font-semibold">Total: ${bagItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors flex items-center">
                            <CreditCard size={18} className="mr-2" />
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );

    const ProfileModal = () => (
        <div className="absolute top-16 right-4 w-64 bg-white rounded-md shadow-lg p-4 text-gray-800 z-50">
            <h3 className="font-bold mb-4">Account</h3>
            {isLoggedIn ? (
                <>
                    <button className="w-full text-left py-2 hover:bg-gray-100 flex items-center" onClick={() => setActivePage('settings')}>
                        <Settings size={18} className="mr-2" />
                        Account Settings
                    </button>
                    <button className="w-full text-left py-2 hover:bg-gray-100 flex items-center" onClick={() => setIsLoggedIn(false)}>
                        <LogOut size={18} className="mr-2" />
                        Sign Out
                    </button>
                </>
            ) : (
                <button className="w-full text-left py-2 hover:bg-gray-100 flex items-center" onClick={() => setIsLoggedIn(true)}>
                    <UserCircle size={18} className="mr-2" />
                    Sign In
                </button>
            )}
        </div>
    );

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-green-800 text-white p-4 flex items-center justify-between relative z-40">
                <div className="flex items-center">
                    <button
                        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                        className="mr-4 md:hidden"
                    >
                        <Menu size={24} />
                    </button>
                    <h1 className="text-xl font-bold">Theraswift</h1>
                </div>
                <div className="flex items-center space-x-4">
                    {isSearchOpen ? (
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for a medication"
                                className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900"
                                autoFocus
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => setIsSearchOpen(true)}>
                            <Search size={24} className="cursor-pointer hover:text-green-300" />
                        </button>
                    )}
                    <button onClick={() => setIsBagModalOpen(!isBagModalOpen)} className="relative z-50">
                        <ShoppingBag size={24} className="cursor-pointer hover:text-green-300" />
                        {bagItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {bagItems.length}
                            </span>
                        )}
                    </button>
                    <button onClick={() => setIsProfileModalOpen(!isProfileModalOpen)} className="z-50">
                        <User size={24} className="cursor-pointer hover:text-green-300" />
                    </button>
                </div>
                {isBagModalOpen && <BagModal />}
                {isProfileModalOpen && <ProfileModal />}
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className={`
                    ${isMobileSidebarOpen ? 'block' : 'hidden'} 
                    md:block 
                    ${isSidebarOpen ? 'w-64' : 'w-20'} 
                    bg-white shadow-md overflow-y-auto transition-all duration-300 relative
                `}>
                    <nav className="mt-6">
                        <div className={`px-4 py-2 flex items-center mb-6 ${!isSidebarOpen && 'justify-center'}`}>
                            <User className="mr-2" size={20} />
                            {isSidebarOpen && (
                                <div>
                                    <p className="font-semibold">Hi, Abudllahi</p>
                                    <p className="text-xs text-gray-500">Welcome To Theraswift</p>
                                </div>
                            )}
                        </div>
                        <NavButton page="meds" icon={Package} label="Meds" description="Order Meds And Refills" />
                        <NavButton page="essentials" icon={Pill} label="Essentials" description="Browse Over-the-Counter Meds" />
                        <NavButton page="orders" icon={ShoppingBag} label="Orders" description="View Past Orders" />
                        <NavButton page="delivery" icon={Truck} label="Delivery" description="View And Edit Your Address" />
                        <NavButton page="invite" icon={Users} label="Invite friends" description="Get Referral Bonus" />
                        <NavButton page="settings" icon={Settings} label="Settings" description="Edit Your Information" />
                    </nav>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="hidden md:flex absolute bottom-4 left-0 right-0 mx-auto w-12 h-12 bg-green-100 text-green-800 items-center justify-center rounded-full hover:bg-green-200 transition-colors duration-200"
                    >
                        {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                    </button>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <main className="flex-1 overflow-y-auto p-4 md:p-6">
                        {renderMainContent()}
                    </main>

                    {/* Chat button */}
                    <button 
  onClick={() => setIsChatOpen(!isChatOpen)} 
  className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-800 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-200 z-10"
>
  <MessageCircle size={24} />
</button>
                </div>
            </div>
    <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
        
    );
};

export default Dashboard;