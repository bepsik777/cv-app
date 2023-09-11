export default function SkillOutput({skillInfo}) {
  const isSkillInfo = skillInfo.length !== 0
  return (
    <div className="skills output">
      <h3>Skills</h3>
      <hr />
      <ul>
      {isSkillInfo ? (
        skillInfo.map((data) => (
          <li key={data}>{data}</li>
        ))
      ) : (
        <>
        <li>Alchemy</li>
        <li>Transmutation</li>
        <li>Black magic basics</li>
        <li>Strong communication</li>
        <li>Team player</li>
        </>
      )}
      </ul>
    </div>
  );
}


