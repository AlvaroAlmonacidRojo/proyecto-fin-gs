import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import React from "react";
import { Link } from "react-router-dom";

interface ListItemLinkProps extends ListItemProps {
  to: string;
  replace?: boolean;
}

const ListItemLink = (props: ListItemLinkProps) => (
  <ListItem {...props} component={Link as any} />
);

export default ListItemLink;
