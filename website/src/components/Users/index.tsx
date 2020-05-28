import {
  Chip,
  CircularProgress,
  createStyles,
  Grid,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core";
import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { Proyect } from "../../../../types/build/proyects";
import { User } from "../../../../types/build/users";
import actionDispatcher from "../../redux/actionDispatcher";
import { Dispatcher } from "../../redux/reducer";
import {
  DefaultState as ProyectListDefaultState,
  getProyectList
} from "../../redux/reducers/proyectList";
import { AppState } from "../../redux/state";
import Button from "../Button";
import DataContainer from "../DataContainer";
import { GenericForm } from "../Forms";
import Translate from "../Translation";
import Typography from "../Typography";

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      padding: "20px",
      height: "100%",
      margin: "20px"
    },
    employ: {
      margin: "20px"
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: 2
    },
    select: {
      minWidth: 120,
      maxWidth: 300
    }
  });
interface ComponentProps {
  users: User[];
  formCallback: (formData: {}) => () => void;
}

interface StateProps {
  proyectList: ProyectListDefaultState;
}

interface DispatchProps {
  dispatchGetProyectList: (refresh: boolean) => () => void;
}

type Props = WithStyles<typeof styles> &
  ComponentProps &
  StateProps &
  DispatchProps;

const mapStateToProps = (state: AppState): StateProps => ({
  proyectList: state.proyectList
});

const mapDispatchToProps = (dispatch: Dispatcher): DispatchProps => ({
  dispatchGetProyectList: actionDispatcher(getProyectList, dispatch)
});

const initialState = {
  email: undefined,
  first_name: undefined,
  last_name: undefined,
  proyect_ids: []
};

const UsersComponent: FC<Props> = ({
  classes,
  users,
  formCallback,
  proyectList,
  dispatchGetProyectList
}) => {
  const allEmployees = users.length;
  const [openForm, setOpenForm] = useState(false);
  const newEmploye = () => setOpenForm(true);
  return (
    <Paper className={classes.paper}>
      <Typography component="h3" variant="h3">
        <Translate message="components.employees.allEmployees.title" />
      </Typography>
      <Typography variant="caption" weight="lighter" customColor="boulder">
        {allEmployees}{" "}
        <Translate message="components.employees.allEmployees.count" />
      </Typography>
      <Grid className={classes.employ}>
        <Button variant="contained" color="secondary" onClick={newEmploye}>
          Nuevo empleado
        </Button>
      </Grid>
      {openForm && (
        <Grid>
          <GenericForm
            initialState={initialState}
            validations={{
              email: {
                presence: { allowEmpty: false }
              },
              first_name: {
                presence: { allowEmpty: false }
              },
              last_name: {
                presence: { allowEmpty: false }
              },
              proyect_ids: {}
            }}
            submitCallback={formCallback}
          >
            {({ state, handleSubmit, handleChange }) => {
              return (
                <>
                  <Grid container>
                    <Grid md={4}>
                      <OutlinedInput
                        placeholder="Email"
                        labelWidth={0}
                        onChange={handleChange("text")("email")}
                      />
                    </Grid>
                    <Grid md={4}>
                      <OutlinedInput
                        placeholder="Nombre"
                        labelWidth={0}
                        onChange={handleChange("text")("first_name")}
                      />
                    </Grid>
                    <Grid md={4}>
                      <OutlinedInput
                        placeholder="Apellidos"
                        labelWidth={0}
                        onChange={handleChange("text")("last_name")}
                      />
                    </Grid>
                    <DataContainer
                      data={proyectList}
                      dataFetcher={dispatchGetProyectList(true)}
                    >
                      {data => {
                        const selectValue = (id: string, data: Proyect[]) => {
                          const proyect = data.filter(c => c.proyect_id === id);
                          return proyect.length > 0 ? `${proyect[0].name}` : "";
                        };
                        return (
                          <Select
                            multiple
                            className={classes.select}
                            renderValue={selected => (
                              <div className={classes.chips}>
                                {(selected as string[]).map(value => (
                                  <Chip
                                    key={value}
                                    label={selectValue(value, data)}
                                    className={classes.chip}
                                  />
                                ))}
                              </div>
                            )}
                            value={state.proyect_ids || []}
                            onChange={handleChange("list")("proyect_ids")}
                          >
                            {data.map(proyect => {
                              return (
                                <MenuItem
                                  value={proyect.proyect_id}
                                >{`${proyect.name}`}</MenuItem>
                              );
                            })}
                          </Select>
                        );
                      }}
                    </DataContainer>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleSubmit}
                      className={classes.employ}
                    >
                      {state.pending ? (
                        <CircularProgress size={24} />
                      ) : (
                        "Enviar"
                      )}
                    </Button>
                  </Grid>
                </>
              );
            }}
          </GenericForm>
        </Grid>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellidos</TableCell>
            <TableCell>Proyectos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(
            ({ user_id, email, first_name, last_name, total_proyects }) => (
              <TableRow key={user_id}>
                <TableCell component="th" scope="row">
                  {email}
                </TableCell>
                <TableCell>{first_name}</TableCell>
                <TableCell>{last_name}</TableCell>
                <TableCell>{total_proyects}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UsersComponent));
