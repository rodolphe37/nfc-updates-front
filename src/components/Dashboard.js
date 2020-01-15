import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default (props) => (
  <Card>
    <CardHeader title="Bienvenue dans votre systeme d'adminitration" />
    <CardContent>
      Vous pouvez ici supprimer, modifier,
      ou créer des nouveaux utilisateurs.
    </CardContent>
  </Card>
);
