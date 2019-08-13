import React, { Component } from 'react';
import { observable, action, configure, runInAction, computed } from 'mobx';
import { UserPermissionApi } from 'common/api';
import { ApiStore } from 'common/stores';
import { ACTION } from 'common/constants';

configure({
	enforceActions: 'observed'
});
export default class Store {

	@observable count = 0;
}

