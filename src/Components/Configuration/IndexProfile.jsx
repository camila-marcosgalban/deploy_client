import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../Actions/index";
import { Link } from "react-router-dom";
import Snackbar, { initialSnack } from "./Snackbar";
import axios from "axios";
//MUI
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
const IndexProfile = () => {
	const { user } = useSelector((state) => state);
	const dispatch = useDispatch();
	//Funcionamiento del checkbox
	const [checked, setChecked] = React.useState(false);
	const [snack, setSnack] = React.useState(initialSnack);
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setSnack(initialSnack);
		if (checked) {
			axios
				.put(
					"https://deploy-back-mangaka-v2.herokuapp.com/api/profile/creator",
					{ creatorMode: checked },
					{
						withCredentials: true,
					}
				)
				.then((res) => {
					setSnack({ type: "success", message: res.data.message });
					dispatch(getUser());
				})
				.catch((error) => console.log(error));
		} else {
			setSnack({
				type: "error",
				message:
					"Debe aceptar los términos y condiciones para empezar a crear",
			});
		}
	};
	return (
		<Box>
			{user.creatorMode ? (
				<>
					<Typography variant="h4">
						Un placer volverte a ver en Mangaka {user.name}!
					</Typography>
					<Divider sx={{ bgcolor: "#357DED", width: { md: "60vw" }, margin: "0 auto" }} />

					<Box
						sx={{
							margin: "0 auto",
							my: 3,
							p: 2,
							color: "white",
							borderRadius: "4px",
							width: { sx: "90vw", md: "45vw" },
							height: { sx: "30vh", md: "40vh" },
							bgcolor: "#192A45",
						}}
					>
						<Typography variant="h4">Pagos</Typography>
						<Typography variant="body2" sx={{ my: 3 }}>
							Para recibir tus pagos debes llenar el siguiente
							Formulario:
						</Typography>
						<Link to={`/profile/CheckoutForm/${user.id}`}>
							<Button variant="contained">Formulario de Pago</Button>
						</Link>
					</Box>

					<Divider />
					<Box sx={{ mt: 3 }}>
						<Typography variant="h5">Crea tu manga!</Typography>
						<Link
							to="/profile/create"
							style={{ textDecoration: "none", color: "white" }}
						>
							<Button
								variant="contained"
								sx={{ width: "50%", mx: 1 }}
							>
								Crear Manga
							</Button>
						</Link>
					</Box>
				</>
			) : (
				<Box
					component="form"
					onSubmit={handleSubmit}
					autoComplete="off"
				>
					<Typography variant="h4">
						Bienvenido a Mangaka {user.name}!
					</Typography>
					<Divider sx={{ bgcolor: "#357DED", width: { md: "60vw" }, margin: "0 auto" }} />
					<Typography
						variant="body1"
						sx={{ textAlign: "left", my: 2 }}
						gutterBottom
					>
						Estamos muy contentos de que te sumes a nuestra
						comunidad y que aportes increíbles historias para leer.
						Pero antes de empezar es necesario que aceptes nuestros
						términos y condiciones:
					</Typography>

					<Stack direction={{ xs: "column", md: "row" }} spacing={2}>
						<Box
							sx={{
								p: 2,
								color: "white",
								borderRadius: "4px",
								margin: "0 auto",
								width: { sx: "90vw", md: "45vw" },
								height: { sx: "30vh", md: "40vh" },
								bgcolor: "#192A45",
							}}
						>
							<Typography variant="h5">
								REGLAS PARA PUBLICAR TU MANGA
							</Typography>
							<ol
								style={{
									textAlign: "left",
									alignItems: "left",
								}}
							>
								<li>
									No publicar contenido pórnografico ni Hentai
								</li>
								<li>
									No publicar mangas ajenos ni ya existentes
								</li>
								<li>Sólo publicar mangas en español</li>
								<li>
									No está permitida la subida de volúmenes,
									tomos o agrupación de capítulos
								</li>
								<li>
									No se permite subidas duplicadas, capítulos
									incompletos
								</li>
							</ol>
						</Box>

						<Box
							sx={{
								p: 2,
								color: "white",
								borderRadius: "4px",
								margin: "0 auto",
								width: { sx: "90vw", md: "45vw" },
								height: { sx: "30vh", md: "40vh" },
								bgcolor: "#192A45",
							}}
						>
							<Typography variant="h5">PAGOS</Typography>
							<ul
								style={{
									textAlign: "left",
									alignItems: "left",
								}}
							>
								<li>
									El sitio se maneja con una moneda propia
								</li>
								<li>
									Por cada manga que vendas el sitio se deja
									10%
								</li>
								<li>
									El intercambio de monedas a dinero real se
									realiza a través de un formulario
								</li>
								<li>
									Los días de cobro serán estipulados por el
									sitio
								</li>
								<li>El retiro se realiza mediante CBU</li>
							</ul>
						</Box>
					</Stack>
					<FormGroup sx={{ margin: "0 auto", alignSelf: "center" }}>
						<FormControlLabel
							control={
								<Checkbox
									checked={checked}
									onChange={handleChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Acepto los términos y condiciones"
						/>
					</FormGroup>

					<Button type="submit" variant="contained">
						Empieza a crear
					</Button>
					{snack.message && (
						<Snackbar type={snack.type} message={snack.message} />
					)}
				</Box>
			)}
		</Box>
	);
};

export default IndexProfile;
