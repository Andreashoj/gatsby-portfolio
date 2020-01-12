import React, { useEffect } from "react"
import { BounceLoader } from "react-spinners"
import styled from "styled-components"

const Spinner = ({ loading, setLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <SpinnerWrapper>
      <div className="wrapper">
        <BounceLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    </SpinnerWrapper>
  )
}

const SpinnerWrapper = styled.div`
  .wrapper {
    height: 100vh;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: white;
    top: 0;
  }
`

export default Spinner
