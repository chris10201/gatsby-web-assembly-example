import React, { useState } from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  const [result, setResult] = useState(0)

  const handleClick = async () => {
    const importObject = {
      env: { abort: () => {} },
    }
    const result = await WebAssembly.instantiateStreaming(
      fetch("/optimized.wasm"),
      importObject
    )
    const exporsts: any = result.instance.exports
    const num = exporsts.add(4, 2)
    setResult(num)
  }

  return (
    <Layout>
      <button onClick={handleClick}> press</button>
      <p>{result}</p>
    </Layout>
  )
}
export default IndexPage
