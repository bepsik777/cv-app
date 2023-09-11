export default function BasicInfoOutput({firstName, lastName, title, about}) {
  return (
    <div className="output basic-info">
      <h1 className="full-name">{firstName + ' ' + lastName}</h1>
      <h2 className="job-title">{title}</h2>
      <div className="summary">
        {about}
      </div>
    </div>
  );
}
