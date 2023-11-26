import { AppBar, Avatar, Box, Link, Toolbar } from '@mui/material';
import association_logo from '../app/assets/icons/association_icon.png'
import instagram_logo from '../app/assets/icons/instagram-icon.png'
import facebook_logo from '../app/assets/icons/facebook-icon.png'


export default function AppFooter() {
    return (
        <Box>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: '1em' }}>
                    <p>Gió Nam Múa Lân | Southern Wind Lion Dance | 南風醒獅團</p>
                    <Link href="mailto:booking@gionam.org">booking@gionam.org</Link>
                    <p >© 2004 – 2022. All rights reserved.</p>
                    <Box sx={{ display: 'flex' }}>
                        {/* target value opens link in new tab
                        rel value prevents tagnabbing (security concern) */}
                        <Link href="https://www.liondanceusa.com/" target="_blank" rel="noopener noreferrer" sx={{ width: 40 }}><img className="footer-image-sports-association" src={association_logo.src} /></Link>
                        <Link href="https://www.instagram.com/gionamsouthernwind/" target="_blank" rel="noopener noreferrer" sx={{ width: 48, height: 48 }}><img className="footer-image-logo" src={instagram_logo.src} /></Link>
                        <Link href="https://www.facebook.com/southernwindliondance" target="_blank" rel="noopener noreferrer" sx={{ width: 48, height: 48 }}><img className="footer-image-logo" src={facebook_logo.src} /></Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}