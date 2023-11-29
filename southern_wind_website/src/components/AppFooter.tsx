import { AppBar, Box, Link, Toolbar } from '@mui/material';
import association_logo from '../app/assets/icons/association_icon.png'
import instagram_logo from '../app/assets/icons/instagram-icon.png'
import facebook_logo from '../app/assets/icons/facebook-icon.png'


export default function AppFooter() {
    return (
        <Box>
            <AppBar 
                position="fixed" 
                color="primary" 
                sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: '1em' }}
                    className='space-y-1 text-sm lg:text-base font-quicksand'>
                    <p>Gió Nam Múa Lân | Southern Wind Lion Dance | 南風醒獅團</p>
                    <Link
                        href="mailto:booking@gionam.org"
                        color='inherit'>booking@gionam.org
                    </Link>
                    <p>©2004–2022. All rights reserved.</p>
                    <div className='flex space-x-6'>
                        {/* target value opens link in new tab
                        rel value prevents tagnabbing (security concern) */}
                        <Link
                            href="https://www.liondanceusa.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={association_logo.src} width={40} />
                        </Link>
                        <Link
                            href="https://www.instagram.com/gionamsouthernwind/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={instagram_logo.src} width={48} height={48} />
                        </Link>
                        <Link
                            href="https://www.facebook.com/southernwindliondance"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={facebook_logo.src} width={48} height={48} />
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}