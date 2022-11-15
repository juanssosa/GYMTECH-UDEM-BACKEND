module.exports={
    getAllUsers: function(conexion, funcion){
        conexion.query("SELECT * FROM user", funcion);
    },
    getUserById:function(conexion, id, funcion){
        conexion.query("SELECT * FROM user WHERE id=?", [id], funcion);
    },
    insertUser:function(conexion, datos, funcion){
        conexion.query("INSERT INTO user (id,name,sex,email,username,password,rol) VALUES (?,?,?,?,?,?,?)", [datos.id, datos.name, datos.sex, datos.email, datos.username, datos.password, datos.rol],funcion);
    },
    deleteUser: function(conexion, id, funcion){
        conexion.query("DELETE FROM user WHERE id = ?", [id],funcion);
    }
}