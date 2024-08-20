
export default function InputTailwind({label, invalid, ...props}) {
  return (
    <p>
      <label className="block mb-2 text-xs font-bold tracking-wide text-stone-200 uppercase">{label}</label>
      <input  className="w-full px-3 py-2 leading-tight bg-stone-300 text-gray-700 border rounded shadow" {...props}/>
    </p>
  )
}