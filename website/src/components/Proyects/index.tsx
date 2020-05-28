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
  WithStyles,
  withStyles
} from "@material-ui/core";
import moment from "moment";
import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { Proyect } from "../../../../types/build/proyects";
import { User } from "../../../../types/build/users";
import actionDispatcher from "../../redux/actionDispatcher";
import { Dispatcher } from "../../redux/reducer";
import {
  DefaultState as UserListDefaultState,
  getUserList
} from "../../redux/reducers/userList";
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
    proyect: {
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
    },
    form: {
      border: `2px solid ${theme.palette.secondary.main}`,
      padding: "20px",
      margin: "20px",
      width: "50%"
    },
    formItems: {
      padding: "10px"
    }
  });

interface ComponentProps {
  proyects: Proyect[];
  formCallback: (formData: {}) => () => void;
}

const initialState = {
  name: undefined,
  description: undefined,
  user_ids: []
};

interface StateProps {
  userList: UserListDefaultState;
}

interface DispatchProps {
  dispatchGetUserList: (refresh: boolean) => () => void;
}

type Props = StateProps &
  DispatchProps &
  WithStyles<typeof styles> &
  ComponentProps;

const mapStateToProps = (state: AppState): StateProps => ({
  userList: state.userList
});

const mapDispatchToProps = (dispatch: Dispatcher): DispatchProps => ({
  dispatchGetUserList: actionDispatcher(getUserList, dispatch)
});

const ProyectsComponent: FC<Props> = ({
  classes,
  proyects,
  formCallback,
  userList,
  dispatchGetUserList
}) => {
  const allProyects = proyects.length;
  const [openForm, setOpenForm] = useState(false);
  const newProyect = () => setOpenForm(true);

  return (
    <Paper className={classes.paper}>
      <Typography component="h3" variant="h3">
        <Translate message="components.proyects.allProyects.title" />
      </Typography>
      <Typography variant="caption" weight="lighter" customColor="boulder">
        {allProyects}{" "}
        <Translate message="components.proyects.allProyects.count" />
      </Typography>
      <Grid className={classes.proyect}>
        <Button variant="contained" color="secondary" onClick={newProyect}>
          Nuevo proyecto
        </Button>
      </Grid>
      {openForm && (
        <Grid>
          <GenericForm
            initialState={initialState}
            validations={{
              name: {
                presence: { allowEmpty: false }
              },
              description: {
                presence: { allowEmpty: false }
              },
              user_ids: {}
            }}
            submitCallback={formCallback}
          >
            {({ state, handleSubmit, handleChange }) => {
              return (
                <>
                  <Grid container className={classes.form}>
                    <Grid md={12} className={classes.formItems}>
                      <OutlinedInput
                        placeholder="Nombre"
                        labelWidth={0}
                        fullWidth
                        onChange={handleChange("text")("name")}
                      />
                    </Grid>
                    <Grid md={12} className={classes.formItems}>
                      <OutlinedInput
                        placeholder="Descripción"
                        labelWidth={0}
                        fullWidth
                        onChange={handleChange("text")("description")}
                      />
                    </Grid>
                    <Grid md={12} className={classes.formItems}>
                      <DataContainer
                        data={userList}
                        dataFetcher={dispatchGetUserList(true)}
                      >
                        {data => {
                          const selectValue = (id: string, data: User[]) => {
                            const user = data.filter(c => c.user_id === id);
                            return user.length > 0
                              ? `${user[0].first_name} ${user[0].last_name}`
                              : "";
                          };
                          return (
                            <Select
                              multiple
                              fullWidth
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
                              value={state.user_ids || []}
                              onChange={handleChange("list")("user_ids")}
                            >
                              {data.map((customer, index) => {
                                return (
                                  <MenuItem
                                    key={index}
                                    value={customer.user_id}
                                  >{`${customer.first_name} ${customer.last_name}`}</MenuItem>
                                );
                              })}
                            </Select>
                          );
                        }}
                      </DataContainer>
                    </Grid>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleSubmit}
                      className={classes.proyect}
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
            <TableCell>Nombre</TableCell>
            <TableCell numeric>Descripción</TableCell>
            <TableCell numeric>Creación</TableCell>
            <TableCell numeric>Empleados</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {proyects.map(
            ({ proyect_id, name, description, created_at, total_users }) => (
              <TableRow key={proyect_id}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell numeric>{description}</TableCell>
                <TableCell numeric>
                  {moment(created_at).format("YYYY-MM-DD HH:mm:ss")}
                </TableCell>
                <TableCell numeric>{total_users}</TableCell>
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
)(withStyles(styles)(ProyectsComponent));
