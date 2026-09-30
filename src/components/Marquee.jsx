const rows = [
  ['React.js', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'RBAC', 'REST APIs', 'DynamoDB', 'ElasticSearch'],
  ['Cognito', 'ECS', 'S3', 'CloudWatch', 'Prompt Engineering', 'LLMs', 'Claude', 'Copilot', 'Postman'],
]
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      {rows.map((r, i) => (
        <div key={i} className={`track ${i ? 'rev' : ''}`}>
          {[...r, ...r, ...r, ...r].map((w, j) => (<span key={j} className={j % 3 === 0 ? 'solid' : ''}>{w}<i>✦</i></span>))}
        </div>
      ))}
    </div>
  )
}
