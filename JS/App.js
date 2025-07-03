  fetch("https://sheet.best/api/sheets/e5698a50-c77c-47ee-895a-eeb9c29c7a17", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "Nombre del niño(a)": data.nombre,
      "Fecha de nacimiento": data.fechaNacimiento,
      "Cédula": data.cedula,
      "Dirección": data.direccion,
      "Nombre del padre": data.nombrePadre,
      "Teléfono del padre": data.telefonoPadre,
      "Nombre de la madre": data.nombreMadre,
      "Teléfono de la madre": data.telefonoMadre,
      "Correo electrónico": data.email,
      "Contacto de emergencia": data.contactoEmergencia,
      "Alergias": data.alergias,
      "Observaciones": data.observaciones,
      "Servicios seleccionados": data.services.join(", ")
    })
  })
  .then(res => res.text())
  .then(text => {
    console.log("✅ Datos enviados a Sheets vía Sheet.best:", text);
    alert("Formulario enviado correctamente.");
    form.reset();
  })
  .catch(err => {
    console.error("❌ Error al enviar a Sheet.best:", err);
    alert("Hubo un error al enviar el formulario.");
  });