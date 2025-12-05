import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function UserProfile() {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#22C55E',
            color: '#22C55E',
            boxShadow: `0 0 0 2px #0C0F13`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.6s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 0.9,
            },
            '100%': {
                transform: 'scale(2.2)',
                opacity: 0,
            },
        },
    }));

    return (
        <Stack direction="row" spacing={1} className="items-center">
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                <Avatar 
                    alt="User"
                    src=""
                    sx={{
                        bgcolor: "#1A1D21",        // dark avatar background
                        width: 40,
                        height: 40,
                        border: "2px solid #0C0F13"
                    }}
                />
            </StyledBadge>

            <div className="flex flex-col justify-center">
                <div className="text-xs md:text-sm text-green-500">online</div>
                <div className="text-xs md:text-sm text-gray-300">Name of the person</div>
            </div>
        </Stack>
    );
}