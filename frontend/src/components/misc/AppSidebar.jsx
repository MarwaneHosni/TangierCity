import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { User } from 'lucide';
import { Menu, Home, Hotel, LucideForkKnifeCrossed, Music, DollarSign, Theater, University, Library, School, BriefcaseBusiness, CompassIcon, Factory, Search, Building, StepBack, BuildingIcon, Building2, Shield, DoorOpen, User2 } from 'lucide-react';

export default function App() {
  return (
    <SidebarProvider>
      <div className='flex'>
        {/* Sidebar */}
        <Sidebar side='left' collapsible='offcanvas' variant='sidebar'>
          <SidebarHeader className="flex flex-row items-center p-6 border-b-2 border-gray-200 bg-blue-200/20">
            <div>
              <DoorOpen className='w-10 h-10 text-2xl text-blue-600 bg-blue-200 p-2 rounded-xl' />
            </div>
            <div>
              <h1 className='text-xl font-bold text-blue-600'>Tangier City</h1>
              <h2 className='text-sm text-gray-600'>CITY PORTAL</h2>
            </div>
          </SidebarHeader>
          <SidebarContent className='p-6'>
            <SidebarMenu>
              <SidebarMenuItem>
                <h2 className='text-gray-700 font-bold text-sm'>OVERVIEW</h2>
                <SidebarMenuButton asChild className='mt-4 mb-4 p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <Home />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <SidebarMenuItem>
                <h2 className='text-blue-500 font-bold text-sm'>TOURISM</h2>
                <SidebarMenuButton asChild className='mt-4 p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <Hotel />
                    <span>Hotels</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className='p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <LucideForkKnifeCrossed />
                    <span>Restaurants</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className='p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <Music />
                    <span>Attractions</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className='p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <DollarSign />
                    <span>ATMs</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className=' mb-4 p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <Theater />
                    <span>Theaters</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <h2 className='text-green-700 font-bold text-sm'>STUDENT</h2>
                <SidebarMenuButton asChild className='mt-4 p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <University />
                    <span>Universities</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className='p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <Library />
                    <span>Libraries</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className='mb-4 p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <School />
                    <span>Education Centers</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <h2 className='text-orange-700 font-bold text-sm'>BUSINESS</h2>
                <SidebarMenuButton asChild className='mt-4 p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <BriefcaseBusiness />
                    <span>Business Centers</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className='p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <CompassIcon />
                    <span>Startups</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className='mb-4 p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <Factory />
                    <span>Industries</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <h2 className='text-purple-700 font-bold text-sm'>JOBS</h2>
                <SidebarMenuButton asChild className='mt-4 p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <Search />
                    <span>Job Listings</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className='p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <Building />
                    <span>Companies</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className='mb-4 p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <Building2 />
                    <span>Categories</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <h2 className='text-gray-700 font-bold'>ADMINISTRATION</h2>
                <SidebarMenuButton asChild className='mt-4 p-4 text-gray-500 rounded-3xl'>
                  <a href='#' className='flex font-bold items-center gap-4 hover:bg-gray-600/10'>
                    <Shield />
                    <span>Admin Panel</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="flex flex-row items-center p-6 border-t-2 border-gray-200 bg-blue-200/20">
              <div>
                <User2 className='w-10 h-10 text-2xl text-blue-600 bg-blue-200 p-2 rounded-xl' />
              </div>
              <div>
                <h1 className='text-md font-bold text-blue-600'>John Doe</h1>
                <h2 className='text-sm text-gray-600'>Administrator</h2>
              </div>
          </SidebarFooter>

          <SidebarTrigger className=' absolute top-4 right-[-2rem] w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-tr-xl rounded-br-xl shadow-lg hover:bg-blue-700 transition'>
            <Menu className='w-4 h-4' />
          </SidebarTrigger>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}
