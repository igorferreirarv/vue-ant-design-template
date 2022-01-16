<template>
	<div class="main">
		<div class="buttons">
			<p>Buttons</p>
			<a-button type="primary">Primary</a-button>
			<a-button>Default</a-button>
			<a-button type="dashed">Dashed</a-button>
			<a-button type="danger">Danger
			</a-button><a-button type="link">Link</a-button>
		</div>
		<br/>
		<div class="Others">
			<p>Others Buttons</p>
			<a-button type="primary" ghost>Ghost</a-button>
			<a-dropdown>
				<a-menu slot="overlay">
					<a-menu-item key="1">1st item</a-menu-item>
					<a-menu-item key="2">2nd item</a-menu-item>
					<a-menu-item key="3">3rd item</a-menu-item>
				</a-menu>
				<a-button> DropDown <a-icon type="down" /> </a-button>
			</a-dropdown>
			<a-button-group>
				<a-button type="primary">
					<a-icon type="cloud"/>With icon
				</a-button>
				<a-button type="danger" icon="cloud-download" />
			</a-button-group>
			<a-button type="primary" loading>Loading</a-button>
			<a-button type="primary" size="large">Large</a-button>
			<a-button type="primary" size="small">Small</a-button>
		</div>
		<br/>
		<div class="buttonBlock">
			<p>Button Block</p>
			<a-button type="primary" block>Block</a-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StartComponents',
}
</script>