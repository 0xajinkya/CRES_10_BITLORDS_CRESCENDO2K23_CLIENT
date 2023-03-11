import { Box, Button, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';

const Index = () => {

  return (
    <Table
      sx={{
        width: '100%'
      }}
    >
      <TableContainer
        sx={{
          borderRadius: '15px'
        }}
      >
        <TableHead
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                width: '20%',
                color: '#3e5267',
                fontSize: '18px',
                fontFamily: 'Poppins'
              }}
            >
              Date
            </TableCell>
            <TableCell
              sx={{
                width: '20%',
                color: '#3e5267',
                fontSize: '18px',
                fontFamily: 'Poppins'
              }}
            >
              Number
            </TableCell>
            <TableCell
              sx={{
                width: '30%',
                color: '#3e5267',
                fontSize: '18px',
                fontFamily: 'Poppins'
              }}
            >
              Prescription Type
            </TableCell>
            <TableCell
              sx={{
                width: '20%',
                color: '#3e5267',
                fontSize: '18px',
                fontFamily: 'Poppins'
              }}
            >
              Physician
            </TableCell>
            <TableCell
              sx={{
                width: '20%'
              }}
            >
              {/* Physician */}
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              22/03/2023
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              JSTPK9**l
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Normal
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Dr. Akshay Jain
            </TableCell>
            <TableCell>
              <Link
                href={'/'}
              >
                <Typography
                  sx={{
                    color: '#089AA4',
                    fontSize: '16px',
                    fontFamily: 'Ubuntu',
                    textDecorationLine: 'red'
                  }}
                >
                Details
                </Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              22/03/2023
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              JSTPK9**l
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Normal
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Dr. Akshay Jain
            </TableCell>
            <TableCell>
              <Link
                href={'/'}
              >
                <Typography
                  sx={{
                    color: '#089AA4',
                    fontSize: '16px',
                    fontFamily: 'Ubuntu',
                    textDecorationLine: 'red'
                  }}
                >
                Details
                </Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              22/03/2023
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              JSTPK9**l
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Normal
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Dr. Akshay Jain
            </TableCell>
            <TableCell>
              <Link
                href={'/'}
              >
                <Typography
                  sx={{
                    color: '#089AA4',
                    fontSize: '16px',
                    fontFamily: 'Ubuntu',
                    textDecorationLine: 'red'
                  }}
                >
                Details
                </Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              22/03/2023
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              JSTPK9**l
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Normal
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Dr. Akshay Jain
            </TableCell>
            <TableCell>
              <Link
                href={'/'}
              >
                <Typography
                  sx={{
                    color: '#089AA4',
                    fontSize: '16px',
                    fontFamily: 'Ubuntu',
                    textDecorationLine: 'red'
                  }}
                >
                Details
                </Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              22/03/2023
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              JSTPK9**l
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Normal
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Dr. Akshay Jain
            </TableCell>
            <TableCell>
              <Link
                href={'/'}
              >
                <Typography
                  sx={{
                    color: '#089AA4',
                    fontSize: '16px',
                    fontFamily: 'Ubuntu',
                    textDecorationLine: 'red'
                  }}
                >
                Details
                </Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              22/03/2023
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              JSTPK9**l
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Normal
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Dr. Akshay Jain
            </TableCell>
            <TableCell>
              <Link
                href={'/'}
              >
                <Typography
                  sx={{
                    color: '#089AA4',
                    fontSize: '16px',
                    fontFamily: 'Ubuntu',
                    textDecorationLine: 'red'
                  }}
                >
                Details
                </Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              22/03/2023
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              JSTPK9**l
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Normal
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Dr. Akshay Jain
            </TableCell>
            <TableCell>
              <Link
                href={'/'}
              >
                <Typography
                  sx={{
                    color: '#089AA4',
                    fontSize: '16px',
                    fontFamily: 'Ubuntu',
                    textDecorationLine: 'red'
                  }}
                >
                Details
                </Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              22/03/2023
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              JSTPK9**l
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Normal
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Dr. Akshay Jain
            </TableCell>
            <TableCell>
              <Link
                href={'/'}
              >
                <Typography
                  sx={{
                    color: '#089AA4',
                    fontSize: '16px',
                    fontFamily: 'Ubuntu',
                    textDecorationLine: 'red'
                  }}
                >
                Details
                </Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              22/03/2023
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              JSTPK9**l
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Normal
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Dr. Akshay Jain
            </TableCell>
            <TableCell>
              <Link
                href={'/'}
              >
                <Typography
                  sx={{
                    color: '#089AA4',
                    fontSize: '16px',
                    fontFamily: 'Ubuntu',
                    textDecorationLine: 'red'
                  }}
                >
                Details
                </Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              22/03/2023
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              JSTPK9**l
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Normal
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Dr. Akshay Jain
            </TableCell>
            <TableCell>
              <Link
                href={'/'}
              >
                <Typography
                  sx={{
                    color: '#089AA4',
                    fontSize: '16px',
                    fontFamily: 'Ubuntu',
                    textDecorationLine: 'red'
                  }}
                >
                Details
                </Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              22/03/2023
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              JSTPK9**l
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Normal
            </TableCell>
            <TableCell
              sx={{
                color: '#8798a4',
                fontSize: '16px',
                fontFamily: 'Ubuntu'
              }}
            >
              Dr. Akshay Jain
            </TableCell>
            <TableCell>
              <Link
                href={'/'}
              >
                <Typography
                  sx={{
                    color: '#089AA4',
                    fontSize: '16px',
                    fontFamily: 'Ubuntu',
                    textDecorationLine: 'red'
                  }}
                >
                Details
                </Typography>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </Table>
  )
}

export default Index
