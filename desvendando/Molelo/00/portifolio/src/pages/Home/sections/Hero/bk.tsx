import { styled , Container, Typography} from "@mui/material"
import Avatar from "../../../../assets/images/GersonES2025.jpg"
import { Grid } from "@mui/material"

const Hero = () => {  
    const StyledHero = styled("div")(() => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "black",
    }));

    const StyledImg = styled("img")(() => ({   
        borderRadius: "50%",
        width: "300px",
        height: "300px", // Mantém proporção circular
        objectFit: "cover", // Garante que a imagem se ajuste bem
    }));

    return (
        <StyledHero>
          <Container>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8} md={4}>
                    <StyledImg src={Avatar} alt="Gerson" /> 
                    <h1 style={{ color: "white" }}>Welcome to My Portfolio</h1>
                </Grid>
                <Grid item xs={4} md={8} sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography color="primary.contrastText" variant="h1" pb={2} textAlign="center">
                                Gerson E. S.
                            </Typography>
                </Grid>
            </Grid> 
          </Container>
        </StyledHero>
    )
}

export default Hero