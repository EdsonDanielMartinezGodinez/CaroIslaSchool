import { useState } from "react";
import logo from "./assets/image 22.svg";
import logo2 from "./assets/logoBlanco.svg";
import graphic from "./assets/Vector.png";
import "./App.css";

interface FormData {
  nombre: string;
  telefono: string;
  instagram: string;
  correo: string;
  fechaNacimiento: string;
  codigoPostal: string;
  medioAtencion: string;
  curso: string;
  fechaInicio: string;
  apartoCon: string;
  costoTotal: string;
  comoTeEnteraste: string;
  motivo: string;
  otrosCursos: string;
  contactoEmergencia: string;
  mayorEdad: string;
  tutor: string;
  aceptoTerminos: boolean;
}

function App() {
  // --- ESTADO DEL FORMULARIO MULTI-PASO ---
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    instagram: "",
    correo: "",
    fechaNacimiento: "",
    codigoPostal: "",
    medioAtencion: "",
    curso: "",
    fechaInicio: "",
    apartoCon: "",
    costoTotal: "",
    comoTeEnteraste: "",
    motivo: "",
    otrosCursos: "",
    contactoEmergencia: "",
    mayorEdad: "",
    tutor: "",
    aceptoTerminos: false,
  });

  const preciosCursos: Record<string, number> = {
    Maquillaje: 3500,
    Uñas: 3000,
    Pestañas: 2500,
    Peinado: 2000,
    CejasLashLift: 2800,
    Automaquillaje: 1500,
    LashLiftCoreano: 3200,
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    // Aquí hacemos el casteo para que TypeScript sepa que si es checkbox, tiene .checked
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    if (name === "curso") {
      setFormData((prev) => ({
        ...prev,
        curso: value,
        costoTotal: preciosCursos[value] ? String(preciosCursos[value]) : "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: val,
      }));
    }
  };

  const handleSubmitFinal = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="Heroe-Wrapper">
        <header className="centered-element">
          <section className="header-section maxwidth">
            <img className="Logo" src={logo} alt="Logo de la empresa" />
            <button aria-label="Contacto">Contacto</button>
          </section>
        </header>

        <section
          className="Heroe centered-element"
          role="region"
          aria-label="Hero"
        >
          <section className="HeaderBody-section maxwidth">
            <div className="Heroe-Text">
              <h1>Domina el Arte del Maquillaje y las Uñas</h1>
              <p>
                Aprende desde cero con expertas, domina las tecnicas en
                tendencia y asegura tu futuro profesional en el mundo de la
                belleza.
              </p>
              <button aria-label="Quiero el temario">Quiero el Temario</button>
            </div>
            <img
              className="Heroe-Graphic"
              src={graphic}
              alt="Ilustración del curso"
            />
          </section>
        </section>
      </div>

      <main className="centered-element">
        <section className="material-section maxwidth">
          <h2 className="titulo">¿Que incluye nuestro programa?</h2>
          <div className="card">
            <svg
              className="SVG"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>book-open-blank-variant</title>
              <path d="M6.5 20C8.2 20 10.65 20.65 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C5.33 4.5 4.11 4.65 3 5C2.25 5.25 1.6 5.55 1 6V20.6C1 20.85 1.25 21.1 1.5 21.1C1.6 21.1 1.65 21.1 1.75 21.05C3.15 20.3 4.85 20 6.5 20M12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5Z" />
            </svg>
            <h3>Material Incluido</h3>
            <p>
              No te preocupes por comprar herramientas, todo esta listo para ti.
            </p>
          </div>
          <div className="card">
            <svg
              className="SVG"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>clock-time-eight-outline</title>
              <path d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 12.8L7.7 15.6L7 14.2L11 11.9V7H12.5V12.8Z" />
            </svg>
            <h3>Horario Flexible</h3>
            <p>
              Acomodamos las clases a tu estilo de vida para que no dejes de
              aprender.
            </p>
          </div>
          <div className="card">
            <svg
              className="SVG"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>school</title>
              <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
            </svg>
            <h3>Certificado Final</h3>
            <p>
              Obten un diploma que avala tus conocimientos para empezar a
              trabajar.
            </p>
          </div>
        </section>
        <section className="Form-section ">
          <div className="form-container">
            {/* Componente visual de Barra de Progreso */}
            {!isSubmitted && (
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            )}

            {isSubmitted ? (
              <div className="success-message">
                <h3>¡Registro completado con éxito!</h3>
                <p>
                  Pronto nos pondremos en contacto contigo a través de{" "}
                  {formData.medioAtencion || "tu medio elegido"}.
                </p>
              </div>
            ) : (
              <>
                <h2 className="form-title">¡Estás a un paso de comenzar!</h2>

                {/* PASO 1: Datos Personales */}
                {step === 1 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      nextStep();
                    }}
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre Completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="telefono"
                        placeholder="Telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="instagram"
                        placeholder="Instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="correo"
                        placeholder="Correo Electronico"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="field-label">Fecha de Nacimiento</label>
                      <input
                        type="date"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="codigoPostal"
                        placeholder="Codigo Postal"
                        value={formData.codigoPostal}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="field-label">Medio De Atencion</label>
                      <div className="radio-group">
                        {["WhatsApp", "Messenger", "Instagram", "En Local"].map(
                          (opcion) => (
                            <label key={opcion} className="radio-label">
                              <input
                                type="radio"
                                name="medioAtencion"
                                value={opcion}
                                checked={formData.medioAtencion === opcion}
                                onChange={handleChange}
                                required
                              />
                              {opcion}
                            </label>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="button-group right">
                      <button type="submit">Siguiente</button>
                    </div>
                  </form>
                )}

                {/* PASO 2: Curso y Pagos */}
                {step === 2 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      nextStep();
                    }}
                  >
                    <div className="form-group">
                      <label className="field-label">
                        Curso al que te inscribiste
                      </label>
                      <select
                        name="curso"
                        value={formData.curso}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecciona un curso</option>
                        <option value="Maquillaje">Curso Maquillaje</option>
                        <option value="Uñas">Curso Uñas</option>
                        <option value="Pestañas">Curso Pestañas</option>
                        <option value="Peinado">Curso Peinado</option>
                        <option value="CejasLashLift">
                          Curso Cejas & Lash Lift
                        </option>
                        <option value="Automaquillaje">
                          Curso Automaquillaje
                        </option>
                        <option value="LashLiftCoreano">
                          Curso Lash Lift Coreano
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="field-label">
                        Fecha de Inicio de Curso
                      </label>
                      <input
                        type="date"
                        name="fechaInicio"
                        value={formData.fechaInicio}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        name="apartoCon"
                        placeholder="Apartaste Con ($)"
                        value={formData.apartoCon}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        name="costoTotal"
                        placeholder="Costo Total del Curso ($)"
                        value={formData.costoTotal}
                        readOnly
                        style={{
                          backgroundColor: "#e5e7eb",
                          cursor: "not-allowed",
                          color: "#6b7280",
                        }}
                        title="Este valor se calcula automáticamente"
                      />
                    </div>

                    <div className="button-group">
                      <button
                        type="button"
                        className="btn-outline"
                        onClick={prevStep}
                      >
                        Atras
                      </button>
                      <button type="submit">Siguiente</button>
                    </div>
                  </form>
                )}

                {/* PASO 3: Encuesta */}
                {step === 3 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      nextStep();
                    }}
                  >
                    <div className="form-group">
                      <label className="field-label">
                        ¿Por que te interesa estudiar con nosotros?
                      </label>
                      <div className="radio-group">
                        {[
                          "Publicidad de Facebook",
                          "Recomendacion en Grupos de facebook",
                          "Publicidad en Instagram",
                          "Recomendacion de un familiar y/o amigo",
                          "Google",
                          "Tik Tok",
                        ].map((opcion) => (
                          <label key={opcion} className="radio-label">
                            <input
                              type="radio"
                              name="comoTeEnteraste"
                              value={opcion}
                              checked={formData.comoTeEnteraste === opcion}
                              onChange={handleChange}
                              required
                            />
                            {opcion}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="field-label">
                        Motivo por el cual entras al curso
                      </label>
                      <div className="radio-group">
                        {[
                          "Para emprendimiento",
                          "Pasatiempo",
                          "Mejorar mis tecnicas y/o habilidades",
                          "Por constancia",
                          "Otro",
                        ].map((opcion) => (
                          <label key={opcion} className="radio-label">
                            <input
                              type="radio"
                              name="motivo"
                              value={opcion}
                              checked={formData.motivo === opcion}
                              onChange={handleChange}
                              required
                            />
                            {opcion}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="field-label">
                        ¿Que otros cursos son de tu interes?
                      </label>
                      <input
                        type="text"
                        name="otrosCursos"
                        value={formData.otrosCursos}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="contactoEmergencia"
                        placeholder="Contacto de emergencia (Nombre y Teléfono)"
                        value={formData.contactoEmergencia}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="button-group">
                      <button
                        type="button"
                        className="btn-outline"
                        onClick={prevStep}
                      >
                        Atras
                      </button>
                      <button type="submit">Siguiente</button>
                    </div>
                  </form>
                )}

                {/* PASO 4: Legal y Envío */}
                {step === 4 && (
                  <form onSubmit={handleSubmitFinal}>
                    <div className="form-group">
                      <label className="field-label">
                        ¿Eres mayor de 14 años?
                      </label>
                      <div className="radio-group">
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="mayorEdad"
                            value="mayor"
                            checked={formData.mayorEdad === "mayor"}
                            onChange={handleChange}
                            required
                          />
                          Soy mayor de 14 años
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="mayorEdad"
                            value="menor"
                            checked={formData.mayorEdad === "menor"}
                            onChange={handleChange}
                            required
                          />
                          Soy menor de 14 años
                        </label>
                      </div>
                    </div>

                    {formData.mayorEdad === "menor" && (
                      <div className="form-group">
                        <label
                          className="field-label"
                          style={{ color: "var(--naranja-primario)" }}
                        >
                          Nombre del padre, madre o tutor legal
                        </label>
                        <input
                          type="text"
                          name="tutor"
                          placeholder="Escribe el nombre aquí..."
                          value={formData.tutor}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    )}

                    <div className="policy-box">
                      <h4>Política de cancelación</h4>
                      <ul>
                        <li>
                          Cancelaciones para reembolso deben notificarse con{" "}
                          <strong>mínimo 1 semana de anticipación</strong>. Si
                          no se notifica, se pierde el apartado.
                        </li>
                        <li>
                          <strong>NO HAY REEMBOLSOS</strong> bajo ninguna
                          circunstancia.
                        </li>
                        <li>
                          Las reposiciones de clase tienen un costo adicional de{" "}
                          <strong>$200 MXN</strong>.
                        </li>
                      </ul>
                    </div>

                    <div className="form-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="aceptoTerminos"
                          checked={formData.aceptoTerminos}
                          onChange={handleChange}
                          required
                        />
                        <span>
                          Entiendo y acepto las Políticas de Cancelación, los
                          Términos y Condiciones, la Política de Privacidad de
                          Caro Isla School y estoy totalmente de acuerdo en
                          asistir a mis clases en las fechas acordadas.
                        </span>
                      </label>
                    </div>

                    <div className="button-group">
                      <button
                        type="button"
                        className="btn-outline"
                        onClick={prevStep}
                      >
                        Atras
                      </button>
                      <button type="submit">Enviar</button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="centered-element">
        <section className="footer maxwidth">
          <img className="Logo" src={logo2} alt="Logo de la empresa" />
          <div className="footer-column">
            <h4>Navegación</h4>
            <a href="#inicio">Inicio</a>
            <a href="#cursos">Cursos</a>
          </div>
          <section className="social-icons">
            <a
              href="https://wa.me/528331234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="SVG SvgB"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>whatsapp</title>
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/caroisla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="SVG SvgB"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>instagram</title>
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/caroisla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="SVG SvgB"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>facebook</title>
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </a>
          </section>
        </section>
        <div className="copyright">
          © 2026 CARO ISLA SCHOOL. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}

export default App;
