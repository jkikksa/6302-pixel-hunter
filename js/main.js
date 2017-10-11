import render from './router/render';
import InitialState from './models/initial-state';

const state = new InitialState();
render(`intro`, state);
