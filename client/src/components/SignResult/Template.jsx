import React from "react";
import { Link } from "react-router-dom";

const Template = ({ data }) => {
  return (
    <table
      style={{
        fontFamily: `${data?.data?.marca?.attributes?.font}`,
        lineHeight: "15px",
        paddingTop: "5px",
        background: "transparent",
      }}
    >
      <tbody>
        <tr style={{ display: "flex" }}>
          <td
            width="90"
            style={{
              borderRight: `1px solid ${data?.data?.marca?.attributes?.color}`,
              paddingRight: "20px",
              alignItems: "flex-start",
            }}
          >
            <table>
              <tbody>
                {data?.data?.imageUrl && (
                  <tr>
                    <td
                      style={{
                        width: "90px",
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={`http://localhost:1337${data?.data?.imageUrl}`}
                        alt=""
                        style={{ width: "100%", objectFit: "cover" }}
                      />
                    </td>
                  </tr>
                )}
                <tr>
                  <td>
                    <img
                      src={data?.data?.marca?.attributes?.img}
                      style={{
                        width: "90px",
                        display: "block",
                        objectFit: "contain",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td
            width="300"
            style={{
              textAlign: "left",
              padding: "5px 15px",
              display: "block",
            }}
          >
            <table style={{ background: "transparent" }}>
              <tbody>
                <tr>
                  <td>
                    <h1
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        marginBottom: "0px",
                      }}
                    >
                      {data?.data?.nombre} {data?.data?.apellido}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                        fontStyle: "normal",
                        marginTop: "8px",
                      }}
                    >
                      {data?.data?.area}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                        fontStyle: "normal",
                        marginTop: "8px",
                      }}
                    >
                      {data?.data?.cargo}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <table style={{ background: "transparent" }}>
              <tbody>
                {data?.data?.telefono && (
                  <tr>
                    <td>
                      <a
                        href={`tel:${data?.data?.telefono}`}
                        style={{
                          fontSize: "12px",
                          color: `${data?.data?.marca?.attributes?.color}`,
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                      >
                        <img
                          src={data?.data?.marca?.attributes?.telephoneImg}
                          alt=""
                          style={{
                            width: "12px",
                            height: "12px",
                            marginRight: "5px",
                          }}
                        />
                        {data?.data?.telefono}
                      </a>
                    </td>
                  </tr>
                )}
                {data?.data?.marca?.attributes?.web && (
                  <tr>
                    <td>
                      {" "}
                      <a
                        style={{
                          fontSize: "12px",
                          textDecoration: "none",
                          color: `${data?.data?.marca?.attributes?.color}`,
                        }}
                        href={data?.data?.marca?.attributes?.web}
                      >
                        <img
                          src={data?.data?.marca?.attributes?.webImg}
                          alt=""
                          style={{
                            width: "12px",
                            height: "12px",
                            marginRight: "5px",
                          }}
                        />
                        {data?.data?.marca?.attributes?.web}
                      </a>
                    </td>
                  </tr>
                )}

                {data?.data?.pais && (
                  <tr>
                    <td>
                      <p
                        style={{
                          fontSize: "12px",
                          color: `${data?.data?.marca?.attributes?.color}`,
                        }}
                      >
                        <img
                          src={data?.data?.marca?.attributes?.markerImg}
                          alt=""
                          style={{
                            width: "12px",
                            height: "12px",
                            marginRight: "5px",
                          }}
                        />
                        {data?.data?.pais}
                      </p>
                    </td>
                  </tr>
                )}
                {data?.data?.marca && (
                  <tr>
                    <td>
                      <a
                        href="https://www.linkedin.com/company/latamly/mycompany/"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "12px",
                            color: `#000000`,
                          }}
                        >
                          <img
                            src="https://latamly.s3.sa-east-1.amazonaws.com/generador-de-firmas/linkedin.svg"
                            alt=""
                            style={{
                              width: "18px",
                              height: "18px",
                              marginRight: "5px",
                              marginTop: "10px",
                            }}
                          />
                        </p>
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Template;
