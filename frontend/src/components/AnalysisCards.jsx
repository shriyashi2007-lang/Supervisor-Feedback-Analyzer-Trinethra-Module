function AnalysisCards({ analysis }) {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Extracted Evidence">
        <div className="space-y-3">
          {analysis.evidence.length > 0 ? (
            analysis.evidence.map((item, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-l-4 ${
                  item.type === 'positive'
                    ? 'border-green-500 bg-green-50'
                    : item.type === 'negative'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-500 bg-gray-50'
                }`}
              >
                <p className="text-sm italic">"{item.quote}"</p>
                <p className="text-xs font-medium capitalize mt-1 text-gray-600">{item.type}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No evidence extracted.</p>
          )}
        </div>
      </Card>

      <Card title="Rubric Score">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {analysis.rubricScore.score}/10
          </div>
          <p className="text-sm text-gray-700">{analysis.rubricScore.justification}</p>
        </div>
      </Card>

      <Card title="KPI Mapping">
        <ul className="list-disc list-inside space-y-1">
          {analysis.kpiMapping.length > 0 ? (
            analysis.kpiMapping.map((kpi, index) => (
              <li key={index} className="text-sm">{kpi}</li>
            ))
          ) : (
            <li className="text-gray-500">No KPIs mapped.</li>
          )}
        </ul>
      </Card>

      <Card title="Gap Analysis">
        <ul className="list-disc list-inside space-y-1">
          {analysis.gapAnalysis.length > 0 ? (
            analysis.gapAnalysis.map((gap, index) => (
              <li key={index} className="text-sm">{gap}</li>
            ))
          ) : (
            <li className="text-gray-500">No gaps identified.</li>
          )}
        </ul>
      </Card>

      <Card title="Follow-up Questions">
        <ol className="list-decimal list-inside space-y-1">
          {analysis.followUpQuestions.length > 0 ? (
            analysis.followUpQuestions.map((question, index) => (
              <li key={index} className="text-sm">{question}</li>
            ))
          ) : (
            <li className="text-gray-500">No questions suggested.</li>
          )}
        </ol>
      </Card>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      {children}
    </div>
  );
}

export default AnalysisCards;