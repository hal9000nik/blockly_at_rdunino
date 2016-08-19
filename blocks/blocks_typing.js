//***********************************************************************************
//								GOOGLE Blockly
//***********************************************************************************

//---------------------------------logic--------------------------------------------
Blockly.Blocks.logic_compare.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.logic_operation.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.logic_negate.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.logic_boolean.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.logic_null.getBlockType = function() {
	return Blockly.Types.NULL;
};
Blockly.Blocks.logic_ternary.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.controls_switch.getVars = function() {
	return [this.getFieldValue('SWVAR')];	
};
Blockly.Blocks.controls_switch.getVarType = function() {
	return this.inputList[1].connection.targetBlock().getBlockType();
};
//---------------------------------maths--------------------------------------------
Blockly.Blocks.math_number.getBlockType = function() {
    var numString = this.getFieldValue('NUM');
    return Blockly.Types.identifyNumber(numString);
};
Blockly.Blocks.inout_angle_maths.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_arithmetic.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_single.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_trig.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_constant.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_number_property.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.math_change.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_round.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_modulo.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_random_int.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_random_float.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
//---------------------------------text--------------------------------------------
Blockly.Blocks.text.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_char.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_join.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_append.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_length.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.text_isEmpty.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//***********************************************************************************
//								Arduino base 
//***********************************************************************************

//---------------------------------arduino_base.js-------------------------------------

Blockly.Blocks.millis.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.var_random.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.base_delay.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.base_map.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.various_constrain.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//---------------------------------arduino_conversion.js-------------------------------------

Blockly.Blocks.conversion_tochar.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.conversion_tobyte.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.conversion_toint.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.conversion_tofloat.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};

//---------------------------------arduino_io.js-------------------------------------

Blockly.Blocks.inout_buildin_led.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.inout_pulsein.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.inout_pulsein_timeout.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.inout_digital_read.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.inout_digital_read_validator.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.inout_PWM_write_validator.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_PWM_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_analog_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_analog_write_validator.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_analog_read.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.tone.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.notone.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_analog_read_validator.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_onoff.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.inout_angle.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_angle.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
