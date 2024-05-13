class Doctor {
    constructor(name, specialty, availability) {
      this.name = name;
      this.specialty = specialty;
      this.availability = availability;
    }
  }
  class Patient {
    constructor(name, preferences) {
      this.name = name;
      this.preferences = preferences;
    }
  }
  class Appointment {
    constructor(doctor, patient, date) {
      this.doctor = doctor;
      this.patient = patient;
      this.date = date;
    }
  }
  function scheduleAppointment(doctor, patient, date) {
    if (doctor.availability.includes(date)) {
      let appointment = new Appointment(doctor, patient, date);
      sendReminder(appointment);
      return appointment;
    } else {
      return "You can not visit the Doctor on that date.";
    }
  }
  function sendReminder(appointment) {
    console.log(`Reminder: You have an appointment with Dr. ${appointment.doctor.name} at ${appointment.time}`);
  }
  let doctor1 = new Doctor("Brian", "Pediatrician", ["Monday 12th", "friday 22nd"]);
  let patient1 = new Patient("Nevert", "Evening appointments");
  let appointment1 = scheduleAppointment(doctor1, patient1, "Monday 12th");
  console.log(appointment1);
  let appointment2 = scheduleAppointment(doctor1, patient1, "Thursday 17th");
  console.log(appointment2);