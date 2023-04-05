import { Stack, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarLink = () => {
  return (
    
    <Stack direction="row"
    divider={<Divider orientation="vertical" flexItem />}
    spacing={2}>
      <Link to="/"><Button variant="Text">Todos</Button></Link>
      <Link to="/category/liquidos"><Button variant="Text">Líquidos</Button></Link>
      <Link to="/category/mate"><Button variant="Text">Mate</Button></Link>
    </Stack>
    
  );
};

export default NavbarLink;