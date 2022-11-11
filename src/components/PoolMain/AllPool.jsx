import React from 'react'
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AllPool.css'
import './DetailPage'
import { useHistory } from "react-router-dom";

function AllPool(props) {
    console.log("propssssss in alll pool",props);
  let history = useHistory();
  const [post, setPost] = useState([]);
  const axios = require('axios');
  async function user() {

    let res = await axios.get('http://peaceful-chamber-69005.herokuapp.com/getAllPairs');
    let data = res.data;
    console.log(data);
    setPost(data);
  }

  console.log(post);

  useEffect(() => {
    user();
  }, [])

  const detailPage= (data)=>{
    console.log(data);
    props.setDataProps(data)
    
    // <DetailPage data={data} />
    history.push("/DetailPage");
  }
  
console.log("propsssssssss",props);
  return (
    <>
      <div className="container">
        <div className="col-md-12">
          <div className="text-white  text-style mb-3">All Pool</div>
          <div className="table-responsive">
            <table className=" col-md-12 table table-dark table-striped  table-hover border format">
              <thead>
                <tr className="row-format">
                  <th scope="col">Id</th>
                  <th scope="col"> Pairs</th>
                  <th scope="col" colspan="">
                    Address
                  </th>
                  <th scope="col">Reserve 0</th>
                  <th scope="col">Reserve 1</th>
                  <th scope="col">Token 1</th>
                  <th scope="col">Token 2</th>
                </tr>
              </thead>
              <tbody>
                {post.map((data) => {
                  return (
                    <tr className="clickable" onClick={() => detailPage(data)}>
                      {/* <Link to='/DetailPage'> */}
                      <th scope="row">{data.id}</th>
                      <td>{`${data.symbol1}/${data.symbol2}`}</td>
                      <td colspan="">
                        {data.address?.substring(0, 4) + '...' + data.address?.substring(data.address?.length - 4)}
                      </td>
                      <td>{data.reserve0}</td>
                      <td>{data.reserve1}</td>
                      <td>{data.token1?.substring(0, 4) + '...' + data.token1?.substring(data.token1?.length - 4)}</td>
                      <td>{data.token2?.substring(0, 4) + '...' + data.token1?.substring(data.token2?.length - 4)}</td>
                      {/* </Link> */}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllPool
