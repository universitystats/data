import { TableContainer, Paper, Table, TableRow, TableBody, withStyles, TableCell as MuiTableCell } from '@material-ui/core';

export default function TariffTable() {

    const borderStyle = '2px solid #666666'

    const TableCell = withStyles({
        root: {
          borderBottom: borderStyle,
          borderRight: borderStyle,
          padding: '8px'
        }
      })(MuiTableCell);

    return (
        <TableContainer style={{marginBottom: '36px'}} >
            <Table style={{border: borderStyle, width: '70%', margin: 'auto'}} >
                <TableBody >

                    <TableRow key='a-level-grade'>
                        <TableCell>A level grade</TableCell>
                        <TableCell>A*</TableCell>
                        <TableCell>A</TableCell>
                        <TableCell>B</TableCell>
                        <TableCell>C</TableCell>
                        <TableCell>D</TableCell>
                        <TableCell>E</TableCell>
                    </TableRow>
                    <TableRow key='ucas-points'>
                        <TableCell>UCAS points</TableCell>
                        <TableCell>140</TableCell>
                        <TableCell>120</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>80</TableCell>
                        <TableCell>60</TableCell>
                        <TableCell>40</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
