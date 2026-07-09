import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
    {
        id: 1,
        name: 'Hasindu',
    },
    {
        id: 2,
        name: 'Lakshi'
    }
];

const Users = () => {
    return (
        <Box
            sx={{
                width: 'calc(100%- 100px)',
                margin: 'auto',
                marginTop: '100px',
            }}
        >
            <UserForm/>
            <UsersTable rows={users}/>
        </Box>
        
    );
}

export default Users;