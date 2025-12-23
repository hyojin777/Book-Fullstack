import React, { useEffect } from 'react'
import { deptListDB } from '../../service/deptLogic'

const DeptList = () => {
  useEffect(() => {
    const deptList = async() => {
      const dept = {
        deptno : 10,
        dname : '영업부',
        loc : '대전'
      }
      const res = await deptListDB(dept)
      console.log(res.data)
    }
    deptList()
  },[])

  return (
    <>
      <h2>부서 목록</h2>
    </>
  )
}

export default DeptList
