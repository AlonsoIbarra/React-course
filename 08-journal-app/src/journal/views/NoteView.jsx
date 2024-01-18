import { SaveOutlined, StarOutline } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"


export const NoteView=()=>{
    return(
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                mb: 1
            }}>
                <Grid item>
                    <Typography
                    fontSize={ 39}
                    fontWeight='ligth'>
                        7 de enero de 2024
                    </Typography>
                </Grid>
                <Grid item>
                    <Button color="primary" sx={{ padding: 2 }}>
                        <SaveOutlined sx={{ fontSize: 30, mr:1 }}/>
                        Guardar
                    </Button>
                </Grid>
                <Grid contianer>
                    <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Titulo"
                    label="Titulo"
                    sx={{ border: 'none', mb: 1}}/>

                    <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Que sucedio hoy..."
                    minRows={ 5 }/>

                </Grid>
                {/* { Galeria } */}
                <ImageGallery/>
        </Grid>
    )
}