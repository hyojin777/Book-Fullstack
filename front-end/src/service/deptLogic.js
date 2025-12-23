import axios from 'axios'

// 1) 부서 목록 조회
export const deptListDB = async (data) => {
  console.log(data)
  try {
    const res = await axios({
      method: 'get',
      url: process.env.REACT_APP_EXPRESS_IP + 'dept',
      params: data
    })
    console.log(res.data)
    return res
  } catch (error) {
    console.error("부서목록 가져오기 실패", error)
    // 호출한 쪽에서 catch하도록 다시 던져 줄 때
    throw error
  }
}

// 1-1) 부서 목록 조회2
export const deptListDB2 = async (params) => {
  console.log('deptListDB2 호출')
  console.log(params)
  try {
    const res = await axios.get(process.env.REACT_APP_EXPRESS_IP + 'dept', {params})
    console.log(res.data)
    return res
  } catch (error) {
    console.error("부서목록 가져오기 실패", error)
    // 호출한 쪽에서 catch하도록 다시 던져 줄 때
    throw error
  }
}